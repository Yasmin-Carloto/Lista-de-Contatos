import { useState, useEffect, useRef } from "react"
import api from "../../api"

export default function Dialog({ showModal, setShowModal, contatos }) {
    const [contato, setContato] = useState({nome: "", telefone: ""})

    const ref = useRef()
    function handleModal() { 
       setShowModal(!showModal)
    }

    useEffect(()=>{
        if(showModal){
            ref.current?.showModal()
        }else{
            ref.current.close()
        }
    },[showModal])

    function acharIndexContato(nome, telefone){
        const indexprocurado = contatos.findIndex(
            contato => contato.nome === nome && contato.telefone === telefone
        )

        if(indexprocurado !== -1){
            return indexprocurado
        }else{
            return "Esse index não existe"
        }
    }

    async function editarContato(){
        const index = acharIndexContato(contato.nome, contato.telefone)

        await api.putContato(index, contato)
        setShowModal(false)
        window.location.reload(false);
    }
    

    function lidarMudanca(e){ 
        setContato((prevContato) => ({
            ...prevContato,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <dialog   ref={ref} className="m-auto flex  backdrop:opacity-25 rounded-lg">
            <div className=" min-w-[300px] px-6 py-4"  style={{display:showModal?"block":"none"}}>
                <header className="flex w-full justify-between px-4 "> <h1>Edição de contato</h1>
                    <button
                        autoFocus
                        onClick={() => handleModal()}
                    > X </button>
                </header>
                
                    <main  className="flex flex-col gap-2 flex-wrap justify-center pt-2 items-center ">
                        <div className="flex flex-col gap-2 py-4 px-2 ">
                            <label className="flex gap-2 items-center justify-between">
                                Nome:
                                <input onChange={(e) => lidarMudanca(e)} name="name" placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md" />
                            </label>
                            <label className="flex gap-2 items-center">
                                Telefone:
                                <input onChange={(e) => lidarMudanca(e)} name="phone" placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md" />
                            </label>
                        </div>
                        <button onClick={(e) => editarContato()} className="border-2 border-black rounded-md px-4 bg-blue-600 text-white  w-full h-12"> Editar Contato</button>
                    </main >
                
            </div>

        </dialog>
    )
}