//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../../utils/api"


function PerfilUsuario() {


    const { idUsuario } = useParams();

    const [tipoUsuario, setTipoUsuario] = useState<string>("");//ajuste no input do select
    const [nome, setNome] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [nascimento, setNascimento] = useState<string>("");
    const [statusAtividade, setStatusAtividade] = useState<string>("");
    const [departamento, setDepartamento] = useState<string>("");
    const [responsavel, setResponsavel] = useState<string>("");
    const [perfil, setPerfil] = useState<string>("");
    const [cargo, setCargo] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    //const [foto, setFoto] = useState <String>("")

    //const [uf, setUf] = useState <String>("")
    // const [cidade, setCidade] = useState <String>("")
    const [listaUsuarios, setListasUsuarios] = useState<String[]>([])


    useEffect(() => {
        document.title = "Perfil de" + nome + " - VSConnect"

        buscarUsuarioPorId()
    }, [])



    function buscarUsuarioPorId() {

        api.get("/usuarios" + idUsuario).then((response: any) => {// exiba usuario
            setNome(response.data.nome)
            setEmail(response.data.email)
            setCpf(response.data.cpf)
            setNascimento(response.data.nascimento)
            setStatusAtividade(response.data.statusAtividade)
            setDepartamento(response.data.departamento)
            setResponsavel(response.data.responsavel)
            setPerfil(response.data.perfil)
            setCargo(response.data.cargo)
            setTipoUsuario(response.data.tipoUsuario)
            

            if (typeof response.data.tipoUsuario === "string") {
                setListasUsuarios(JSON.parse(response.data.tipoUsuario))
            } else {
                setListasUsuarios(response.data.tipoUsuario)
            }

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
                    <h1>{nome}</h1>

                    <div className="topo_dev">
                        {/*  <img src={"http://localhost:3000/static/" + foto} alt={"Foto de perfil de " + nome} />*/}
                        {/* <h2> {nome}</h2> */}
                    </div>

                    <div className="contato_form">
                        <div className="contato_local">
                           {/* <div className="contato">
                                <p>Email para contato: {email} </p>
                                 <Link to={"mailto: " + email } >{email}</Link> 
                            </div>*/}



                            {/* <div className="local"> 
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) C pyright 2023 Fonticons, Inc. */}
                            {/* <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                />
                            </svg>
                           {/* <p>Usuário: { tipoUsuario } </p> */}
                            {/*</div>*/}

                            <p>Email para contato: {email} </p>
                            <p>Departamento: {departamento}</p>
                            <p>Cargo: { cargo }</p>
                            <p>Status: { statusAtividade }</p>
                            <p>Perfil: { perfil }</p>

                        </div>

                        <div className="contato_local">
                            <p>CPF: { cpf }</p>
                            <p>Nascimento: { nascimento }</p>
                            <p>Tipo de Usuario: { tipoUsuario }</p>
                            <p>Responsável: { responsavel }</p>
                        </div>





                    </div>



                   {/* <div className="techs">
                        <p>Tipo de Usuário: </p>
                        <div className="lista_skills">
                            {listaUsuarios.map((skill: any, index: number) => { //listaSkills tem skill number e posicao
                                return <span key={index}>{skill}</span> // para cada skill returne um numero

                            })*/}
                           {/* }
                            {/* <span>HTML</span>
                            <span>CSS</span>
                            <span>React</span> */}

                        {/*</div>
                    </div>*/}


                    {/*<footer>
                        <Link>
                            TEM INFORMAÇÕES QUE APAGUEI
                        </Link>
                    </footer>*/}
                </div>
            </div>

        </main>);
}

export default PerfilUsuario;