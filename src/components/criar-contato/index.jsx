import { useState } from "react"
import api from "../../api"

export default function CriarContato(){
    const [contato, setContato] = useState({nome: "", telefone: ""})

    function lidarMudanca(e){ 
        setContato((prevContato) => ({
            ...prevContato,
            [e.target.name]: e.target.value
        }))
    }

    async function adicionarContato(){
      await api.postContatos(contato)
      window.location.reload(false);
    } 

    return(
        <section id="campoCriarContato" className="flex gap-2 flex-wrap justify-center pt-2 border items-center">
          <div className="flex flex-col gap-2 py-4 px-2 ">
            <label className="flex gap-2 items-center justify-between">
              Nome:
              <input placeholder="Digite o nome completo" name="name" className="text-black px-2 py-1 border rounded-md" onChange={(e) => lidarMudanca(e)}/>
            </label>
            <label className="flex gap-2 items-center">
              Telefone:
              <input type="number" placeholder="Digite o nome completo" name="phone" className=" text-black px-2 py-1 border rounded-md" onChange={(e) => lidarMudanca(e)}/>
            </label>
          </div>

          <button onClick={(e) => adicionarContato()} className="border-2 border-black rounded-md px-4 bg-emerald-600 text-white w-32 h-20"> Adicionar Contato</button>
        </section>
    )
}