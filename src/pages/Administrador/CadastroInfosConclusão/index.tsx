import "./style.css"
import { Link } from "react-router-dom";
import { useState } from "react"
import PessoaCadastro  from "../../../assets/PessoaCadastro.png"

function CadastroInfosConclusao() {
    const [email, setEmail] = useState<string>("")

    function cadastrarUsuario(event: any){
        event.preventDefault();

        const formdata = new FormData()

        formdata.append("email", email)
    }

    return (
        <main id="rightConclusao">
            <section id="CadastroConclusao">
                <div className="linha_sup_status">
                    <div className="linha_sup_esq">
                        <p>administrador / cadastro</p>
                    </div>
                    <div className="linha_sup_dir">
                        <Link to="/admpessoais" className="destaque2">
                            {/* <p>pessoal</p>  */}
                            {/* <a href="../cadastro1/cadastro1.html" className="destaque2">
                                pessoal
                            </a> */}
                            pessoal
                        </Link>
                        <Link to="/admcorporativas" className="destaque2">
                            {/* <p>corporativo</p> */}
                            {/* <a href="../cadastro2/cadastro2.html" className="destaque2">
                                corporativo
                            </a> */}
                            corporativo
                        </Link>
                        <Link to="/admconclusao" className="destaque">
                            {/* <p class="destaque">conclusao</p> */}
                            {/* <a href="../cadastro3/cadastro3.html" className="destaque">
                                conclusão
                            </a> */}
                            conclusão
                        </Link>
                        
                    </div>
                </div>
                <form onSubmit={cadastrarUsuario} className="formulario" method="POST">
                    <div>
                        <img src={PessoaCadastro} alt="" />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-usuario">E-mail:</label>
                        <input type="email"
                            placeholder="ricardosouza1980@gmail.com"
                            name="usuario"
                            id="campo-usuario"
                            onChange={ (event) => {setEmail(event.target.value)}}
                        />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-senha">Confirme o E-mail:</label>
                        <input type="email"
                            placeholder="ricardosouza1980@gmail.com"
                            name="usuario"
                            id="campo-usuario"
                            onChange={ (event) => {setEmail(event.target.value)}}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            {" "}
                            <a href="../cadastro3/cadastro3.html">salvar</a>{" "}
                        </button>
                    </div>
                </form>
                {/* </section> */}
            </section>
        </main>
        

    )
}

export default CadastroInfosConclusao;