import "./style.css"
import PessoaCadastro from "../../../assets/PessoaCadastro.png"



export default function AdministradorConsulta() {
    return (
            <main id="AdministradorConsulta">
                <section className="right">
                    <form className="formi">
                        <div className="perfil_img">
                            <img src={PessoaCadastro} alt="#" />
                            
                        </div>
                        <div className="formulario">
                            <div className="label_mail">
                                <label htmlFor="campo-usuario">Nome:</label>
                                <input
                                    placeholder="Ricardo Souza"
                                    name="usuario"
                                    id="campo-usuario"
                                />
                            </div>
                            <div className="label_mail">
                                <label htmlFor="campo-senha">Numero de Usuário:</label>
                                <input placeholder="98787462023" name="usuario" id="campo-usuario" />
                            </div>
                            <div className="btn">
                                <button type="submit">Excluir</button>
                                <button type="submit">Editar</button>
                            </div>
                        </div>
                    </form>
                    <form className="formulario1">
                        <div className="label_mail2">
                            <input placeholder="Consulta por" name="usuario" id="campo-usuario" />
                        </div>
                        <div className="label_mail1">
                            <input
                                placeholder="Demanda Dezembro"
                                name="usuario"
                                id="campo-usuario"
                            />
                        </div>
                        <div>
                            <button type="submit">Consulta</button>
                        </div>
                    </form>
                    <div className="historico">
                        <p>Administrador / Consulta</p>
                    </div>
                </section>
            </main>
        //  </> 
    )
}