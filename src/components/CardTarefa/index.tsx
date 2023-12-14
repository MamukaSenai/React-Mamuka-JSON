import { Link } from "react-router-dom"
import "./style.css"

export default function CardTarefa(props: any) {
    return (
        <div className="tarefa">
            <div className="grupo_tarefas">
                <div className="contato_dev">
                    <Link className="contato_dev_nome" to={"/tarefas/" + props.id} >{props.nomeTarefa}</Link>
                    <p>Status da Tarefa: {props.statusTarefa}</p>
                    {/*<p>Data de Inicio: {props.dataInicio}</p>
                    <p>Data de Conclusão: {props.dataConclusao}</p>*/}
                </div>
            </div>
        </div>
    )
}