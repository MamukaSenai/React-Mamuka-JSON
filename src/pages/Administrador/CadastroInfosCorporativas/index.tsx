import "./style.css"
import { Link } from "react-router-dom";
import { useState } from "react"

import PessoaCadastro  from "../../../assets/PessoaCadastro.png"

function CadastroInfosCorporativas(){
    const [perfil, setPerfil] = useState<string>("")
    const [cargo, setCargo] = useState<string>("")

    function cadastrarUsuario(event: any){
        event.preventDefault();

        const formdata = new FormData()

        formdata.append("perfil", perfil)
        formdata.append("cargo", cargo)
    }
    

    return(
        <main id="rightCorporativas">
            <section id="CadastroCorporativas">
                {/* <section class="right"> */}
                <div className="linha_sup_status">
                    <div className="linha_sup_esq">
                    <p>administrador / cadastro</p>
                    </div>
                    <div className="linha_sup_dir">
                    <Link to="/admpessoais" className="destaque2">
                        {/* <a href="#" className="destaque2">
                            pessoal
                        </a> */}
                        pessoal
                    </Link>    
                    <Link to="/admcorporativas" className="destaque">
                        {/* <p class="destaque">corporativo</p> */}
                        {/* <a href="#" className="destaque">
                            corporativo
                        </a> */}
                        corporativo
                    </Link>    
                    <Link to="/admconclusao" className="destaque2">
                        {/* <a href="#" className="destaque2">
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
                    <label htmlFor="campo-usuario">Perfil:</label>
                    <input type="text" placeholder="Administrador" 
                        name="usuario" id="campo-usuario" 
                        onChange={ (event) => {setPerfil(event.target.value)}}
                    />
                    </div>
                    <div className="label_mail">
                    <label htmlFor="campo-senha">Cargo:</label>
                    <input type="text" placeholder="Gerente" 
                        name="usuario" id="campo-usuario"
                        onChange={ (event) => {setCargo(event.target.value)}}
                     />
                    </div>
                    <div className="label_mail">
                    <label htmlFor="campo-senha">Numero Usuario:</label>
                    <input placeholder="987874652023" name="usuario" id="campo-usuario" />
                    </div>
                    <div>
                    <button type="submit">
                        {" "}
                        <Link to="/admconclusao">
                            salvar
                        </Link> 
                        {/* <a href="../cadastro3/cadastro3.html">salvar</a>{" "} */}
                    </button>
                    </div>
                </form>
                {/* </section> */}
            </section>

        </main>

    )
}

export default CadastroInfosCorporativas;