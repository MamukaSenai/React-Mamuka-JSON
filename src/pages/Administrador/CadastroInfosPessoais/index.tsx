import "./style.css"
import { Link } from "react-router-dom"
import { useState } from "react"

//import api from "../../utils/api"

import PessoaCadastro from "../../../assets/PessoaCadastro.png"

function CadastroInfosPessoais() {
    const [nome, setNome] = useState<string>("")
   

    const [cpf, setCpf] = useState<string>("")


    function cadastrarUsuario(event: any){
        event.preventDefault();

        const formdata = new FormData() // para nao precisar decodificar foto

        formdata.append("nome", nome)
        formdata.append("cpf", cpf)


        /* 
        api.post("users", formdata).then((response) =>{
            console.log(response)
            alert("Usuario criado com sucesso! :) ")
            //Navegacao para login
        }).catch((error) => {
            console.log(error)
        }) */

        // executa then quando der certo e catch quando der erro
    }

    return (
        <main id="rightPessoais">
            <section id="CadastroPessoais">
                {/* <section class="right"> */}
                <div className="linha_sup_status">
                    <div className="linha_sup_esq">
                        <p>administrador / cadastro</p>
                    </div>
                    <div className="linha_sup_dir">
                        {/* <p class="destaque">pessoal</p> */}
                        <Link to="/admpessoais" className="destaque">
                            {/* <a href="#" >
                                pessoal
                            </a> */}
                            pessoal
                        </Link>

                        <Link to="/admcorporativas" className="destaque2">
                            {/* <a href="#" className="destaque2">
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
                        <label htmlFor="campo-usuario">Nome:</label>
                        <input type="text" 
                            onChange={ (event) => {setNome(event.target.value)}}
                            placeholder="Ricardo Souza" name="usuario" id="campo-usuario"
                             />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-senha">Data de nascimento:</label>
                        <input placeholder="12/10/1980" name="usuario" id="campo-usuario" />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-senha">CPF:</label>
                        <input type="text"
                            placeholder="211.235.632.23" 
                            name="usuario" id="campo-usuario" 
                            onChange={ (event) => {setCpf(event.target.value)}}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            {" "}
                            <Link to="/admcorporativas">
                                salvar
                            </Link>
                            {/* <a href="../cadastro2/cadastro2.html">salvar</a>{" "} */}
                        </button>
                    </div>
                </form>
                {/* </section> */}
            </section>
        </main>


    )
}
export default CadastroInfosPessoais;