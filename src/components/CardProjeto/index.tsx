import { Link } from "react-router-dom"
import "./style.css"

export default function CardProjeto(props: any) {
    return (
        <div className="projeto">
            <div className="grupo_projetos">
                <div className="contato_dev">
                    <Link className="contato_dev_nome" to={"/projetos/" + props.id} >{props.nomeProjeto}</Link>
                    <p>Status do Projeto: {props.statusProjeto}</p>
                    <p>Nome do responsavel: {props.responsavel}</p>
                    {/*<p>Data de Inicio: {props.dataInicio}</p>
                    <p>Data de Conclusão: {props.dataConclusao}</p>*/}
                    
                </div>
            </div>
        </div>
    )
}