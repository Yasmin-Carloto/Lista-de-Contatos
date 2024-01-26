import { useEffect, useState } from "react"
import api from "./api"
import Dialog from "./components/Dialog"
import CriarContato from "./components/criar-contato"
import ListarContatos from "./components/listar-contatos"
import CardContato from "./components/card-contato"


function App() {
  const [showModal, setShowModal] = useState(false)
  const [contatos, setContatos] = useState([])

  useEffect(() => {
    const pegarContatos = async () => {
      try {
        const contatos = await api.getContatos()
        setContatos(contatos)
      } catch (error) {
        console.error("Erro:", error)
      }
    }
  
    pegarContatos()
  }, [contatos])

  async function deletarContato(id){
    api.deleteContatos(id)
    window.location.reload(false)
  }

  return (
    <div className="dark:bg-cyan-800 dark:text-slate-50 bg-slate-100 text-slate-800 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-2xl font-semibold my-6">Minha Lista Telefônica</h1>
      <main className="border shadow-lg  px-4 py-2 max-w-[300px] md:max-w-[500px] lg:max-w-[700px] rounded-xl flex flex-col gap-4">
        <CriarContato/>

        <ListarContatos>
          {contatos.length > 0 ?           
          contatos.map((contatoItem) => (
            <CardContato
              key={contatos.indexOf(contatoItem)}
              nome={contatoItem.name}
              telefone={contatoItem.phone} 
              setModal={() => setShowModal(true)}
              deletarContato={() => deletarContato(contatos.indexOf(contatoItem))}/>
          )) : <h2>Esperando novos contatos... </h2>}


        </ListarContatos>
        
      </main>

      {/* <div className="border p-8 w-full max-w-[450px] mt-4 gap-4 flex flex-col justify-center bg-white rounded-lg">
        <h2>Exemplo de como requisições a uma API funcionam</h2>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          onClick={handleApiExample}
        > Acionar Api</button>
      </div> */}

      {/* Esse modal pode ser utilizado para exibir informações de modificação do usuário */}
      <Dialog showModal={showModal} setShowModal={setShowModal} contatos={contatos}/>
      
    </div>
  )
}

export default App
