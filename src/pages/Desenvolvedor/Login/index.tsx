import "./style.css"


import Logo from "../../../assets/Logo.png"
import LoginLateralEsquerda from "../../../assets/LoginLateralEsquerda.png"
import mamuca from "../src/assets/Logo.png"









function DesenvolvedorLogin() {
    return (

        <>  
            <main id="DesenvolvedorLogin">
                <section className="geral">
                    <div>
                        <div className="main-login">
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
                                        <input type="text" name="usuario" placeholder="Usuario" />
                                    </div>
                                    <div className="textfield">
                                        <label htmlFor="senha">Senha</label>
                                        <input type="password" name="senha" placeholder="Senha" />
                                    </div>
                                    <div className="unlearn">
                                        <a href="#">Esqueceu sua senha</a>
                                    </div>
                                    <button className="btn-login">Login</button>
                                    <a className="registro" href="#">
                                    Registre-se
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                                         
            </main>




        </>
    )

}


export default DesenvolvedorLogin;