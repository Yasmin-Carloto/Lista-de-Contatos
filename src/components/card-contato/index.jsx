export default function CardContato(props){
    return(
        <article className="px-6  border shadow-lg">

            <div>
                <h3 className="pt-4 pb-2"><strong>Nome:</strong>{props.nome}</h3>
                <hr />
                
                <p className="pt-2 pb-4">
                    <strong>Telefone:</strong>{props.telefone}
                </p>
            </div>


            <div className="flex mb-4 gap-4">
                <button onClick={props.setModal} className="py-2 bg-blue-500 text-white flex-1 rounded-md border border-black">
                Editar
                </button>
                <button onClick={props.deletarContato} className="py-2 bg-red-500 text-white flex-1 rounded-md border border-black">
                    Deletar
                </button>
            </div>
            
        </article>
    )
}