//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../../utils/api"


function VisualizarTarefa() {


    const { idTarefa } = useParams();

    const [nomeTarefa, setNomeTarefa] = useState<String>("")
    const [statusTarefa, setStatusTarefa] = useState<string>("");
    const [dataInicio, setDataInicio] = useState<string>("");
    const [dataConclusao, setDataConclusao] = useState<string>("");


   // const [tipoUsuario, setTipoUsuario] = useState<string>("");

    //const [listaUsuarios, setListasUsuarios] = useState<String[]>([])


    useEffect(() => {
        document.title = "Perfil de" + nomeTarefa + " - VSConnect"

        buscarTarefaPorId()
    }, [])



    function buscarTarefaPorId() {

        api.get("tarefas" + idTarefa).then((response: any) => {// exiba usuario
            setNomeTarefa(response.data.nomeTarefa)
            setStatusTarefa(response.data.statusTarefa)
            setDataInicio(response.data.dataInicio)
            setDataConclusao(response.data.dataConclusao)


            //setTipoUsuario(response.data.tipoUsuario)
            

            // if (typeof response.data.tipoUsuario === "string") {
            //     setListasUsuarios(JSON.parse(response.data.tipoUsuario))
            // } else {
            //     setListasUsuarios(response.data.tipoUsuario)
            // }

            // setFoto(response.data.user_img)

            // setUf(response.data.uf)
            //setCidade(response.data.cidade)
            // setListaskills(response.data.hardSkills)

        }).catch((error) => {
            console.log(error)
        }) // COMENTEI PARA TESTAR/ DESCOMENTAR DEPOIS
    }


    return (
        <main id="main_perfilusuario">
            <div className="container container_perfil_dev">
                <div className="perfil_dev_conteudo">
                    <h1>{nomeTarefa}</h1>

                    <div className="topo_dev">
                        {/*  <img src={"http://localhost:3000/static/" + foto} alt={"Foto de perfil de " + nomeTarefa} />*/}
                        {/* <h2> {nomeTarefa}</h2> */}
                    </div>

                    <div className="contato_form">
                        <div className="contato_local">

                            <p>Status: {statusTarefa} </p>
                            {/* <p>Departamento: {departamento}</p>
                            <p>Cargo: { cargo }</p> */}

                        </div>

                        <div className="contato_local">
                            <p>Data de Inicio: { dataInicio }</p>
                            <p>Data de Conclusão: { dataConclusao }</p>
                            {/* <p>Tipo de Usuario: { tipoUsuario }</p> */}
                        </div>
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarTarefa;