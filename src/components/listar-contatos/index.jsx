import CardContato from "../card-contato"

export default function ListarContatos({ children }){

    return(
        <section id="campoListarContatos" className="px-2 pb-4">
            <h2 className="py-4 font-semibold">Meus contatos:</h2>
            {children}
        </section>
    )
}