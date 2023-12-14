import "./style.css"
import secureLocalStorage from "react-secure-storage";

import { useState } from "react";
import { useNavigate } from "react-router-dom"
import api from "../../../utils/api";


import Logo from "../../../assets/logo.png"
import LoginLateralEsquerda from "../../../assets/LoginLateralEsquerda.png"
import mamuca from "../src/assets/Logo.png"


function AdministradorLogin() {
    const navigate = useNavigate()

    const [ email, setEmail ] = useState<string>("")
    const [ senha, setSenha ] = useState<string>("")

    function fazerLogin(event: any) {
        event.preventDefault()

        const usuario: object = {
            email: email,
            password: senha
        }

        api.post("login", usuario).then( (response) => {
            console.log(response)

            secureLocalStorage.setItem("user", response.data)
            
            navigate("/perfil/" + response.data.user.id)

            // Recarrega a página
            navigate(0)            
        })
    }


    return (

        <>
            <main id="AdministradorLogin">
                <section className="geral" >
                    <form onSubmit={ fazerLogin } method="POST">
                        <div className="main-login" >
                            <div className="left-login">
                                <img
                                    src={LoginLateralEsquerda}
                                    alt="Imagem pessoa em frente a um quadro de projetos"
                                />
                                <h1> Bem vindo </h1>

                            </div>

                            <div className="right-login">
                                <div className="card-login">
                                    <img src={Logo} alt="Logo mamuka" />
                                    <h1>Login</h1>
                                    <div className="textfield">
                                        <label htmlFor="usuario">Usuario</label>
                                        <input type="text" name="usuario" onChange={ (event) => setEmail(event.target.value) } placeholder="Usuario" />
                                    </div>
                                    <div className="textfield">
                                        <label htmlFor="senha">Senha</label>
                                        <input type="password" name="senha" onChange={ (event) => setSenha(event.target.value) } placeholder="Senha" />
                                    </div>
                                    <div className="unlearn">
                                        <a href="#">Esqueceu sua senha</a>
                                    </div>
                                    <button className="btn-login"> Login</button>
                                    <a className="registro" href="#">
                                    Registre-se
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>




        </>
    );

}


export default AdministradorLogin;