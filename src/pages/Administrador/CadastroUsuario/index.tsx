import "./style.css";

//Hook
import { useState } from "react";

//axios
import api from "../../../utils/api";




export default function CadastroUsuario(props: any) {

    //state techs com as tecnologias definidas
    /*const [techs, setTechs] = useState<string[]>(
        [
            "ADM",
            "DEV",
            "GESTOR"
        ]
         );*/

    const [tipoUsuario, setTipoUsuario] = useState<string>("");//ajuste no input do select
    const [nome, setNome] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setNascimento] = useState<string>("");
    const [statusAtividade, setStatusAtividade] = useState<string>("");
    const [departamento, setDepartamento] = useState<string>("");
    const [responsavel, setResponsavel] = useState<string>("");
    const [perfil, setPerfil] = useState<string>("");
    const [cargo, setCargo] = useState<string>("");

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");




    const [usuariosSelecionados, setUsuariosSelecionadao] = useState<string[]>([]); // Array (lista) para armazenar as skills selecionadas

    const [select, setSelect] = useState<string>(""); // state que contém a opção de skill selecionada pelo usuário


    function cadastrarUsuario(event: any) {
        event.preventDefault();

        console.log("odosdnfisdnfisdjfn");
        

        //só utiliza formData quando tiver arquivos 
        const formData = new FormData();

        //A chave da função do append() precisa ser o mesmo nome do atributo que api retorna
       
       //formData.append("tipo_usuario", tipoUsuario);
        formData.append("nome", nome);
        formData.append("cpf", cpf);
        
        formData.append("dataNascimento", dataNascimento);
        formData.append("statusAtividade", statusAtividade);
        formData.append("departamento", departamento);
        formData.append("responsavel", responsavel);
        formData.append("perfil", perfil);

        formData.append("cargo", cargo);
        formData.append("email", email);
        formData.append("senha", senha);

        
        //const [ listaUsuarios, setListasUsuarios] = useState <String[]>([])

        //formData.append("hardSkills", JSON.stringify(usuariosSelecionados))
        //formData.append("tipoUsuario", JSON.stringify(usuariosSelecionados))

        console.log("chamadaaa API");
        

        api.post("/usuarios", formData).then((response) => {
            console.log(response)
            alert("Usuário criado com sucesso! 😊🤗")
            // Navegação para login
        }).catch((error) => {
            console.log(error)
        })
    }

    /*function adicionarUsuario() {
         //verifica o valor do state select
         if (select === "") {
             //se for igual a string vazia, exibe uma mensagem
             alert("Selecione um tipo de usuário para adicionar");
         } else {
             //se não, verifica se no state usuariosSelecionados existe a skill que o usuario selecionou
             if (usuariosSelecionados.includes(select)) {
                 //se existir, exibe uma mensagem
                 alert("Esse tipo de usuário já foi selecionado");
             }
             else {
                 //se não existir, a variavel novaListaUsuariosSelecionadas cria uma cópia do valor do state usuariosSelecionados
                 let novaListaUsuariosSelecionadas = [...usuariosSelecionados];
 
                 //E adiciona a skill, que foi selecionada pelo usuário
                 novaListaUsuariosSelecionadas.push(select);
 
                 //Atualiza o valor do state usuariosSelecionados
                 setUsuariosSelecionadao(novaListaUsuariosSelecionadas);
             }
         }
     }*/
    /*
    function excluirUsuario(skill: string) {

        //A variavel novaListaUsuariosSelecionadas armazena skills diferente da skill que o usuário clicou para ser excluida.
        const novaListaUsuariosSelecionadas = usuariosSelecionados.filter(item => item !== skill);

        //Atualiza o valor do state usuariosSelecionados, com o valor da variavel novaListaUsuariosSelecionadas 
        setUsuariosSelecionadao(novaListaUsuariosSelecionadas);
    }*/


    return (
        <main className="main_cadastro">
            <div className="container_cad">
                <div className="cad_conteudo">
                    <h1>Cadastro</h1>
                    <hr />
                    <form onSubmit={cadastrarUsuario} className="cad_formulario" method="POST">
                        <div className="card_box_org">
                            <div className="card_form">
                                    <div className="cad_box_input">
                                        <label htmlFor="nome">Nome Completo:</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            onChange={(event) => { setNome(event.target.value) }}
                                            placeholder="Digite aqui seu nome:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="email">E-mail:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            onChange={(event) => { setEmail(event.target.value) }}
                                            placeholder="Digite aqui seu e-mail:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="senha">Senha:</label>
                                        <input
                                            type="password"
                                            id="senha"
                                            onChange={(event) => { setSenha(event.target.value) }}
                                            placeholder="Digite aqui sua senha:"
                                            required
                                        />
                                    </div>
                                    
                            </div>

                            <div className="card_form">
                                    <div className="cad_box_input">
                                        <label htmlFor="cpf">CPF:</label>
                                        <input
                                            type="text"
                                            id="cpf"
                                            onChange={(event) => { setCpf(event.target.value) }}
                                            placeholder="Digite aqui seu cpf:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="data_nascimento">Data de nascimento:</label>
                                        <input
                                            type="date"
                                            id="dataNascimento"
                                            onChange={(event) => { setNascimento(event.target.value) }}
                                            placeholder="Digite aqui data de nascimento:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="departamento">Departamento:</label>
                                        <input
                                            type="text"
                                            id="departamento"
                                            onChange={(event) => { setDepartamento(event.target.value) }}
                                            placeholder="Digite aqui seu departamento:"
                                            required
                                        />
                                    </div>
                                    
                                    
                                    
                            </div>

                            <div className="card_form">
                                    {/* <div className="cad_box_input">
                                            <label htmlFor="tipo_usuario">Tipo de Usuário:</label>
                                            <input
                                                type="text"
                                                id="tipo_usuario"
                                                onChange={(event) => { setTipoUsuario(event.target.value) }}
                                                placeholder="Digite o tipo Usuário:"
                                                required
                                            />
                                    </div> */}
                                    <div className="cad_box_input">
                                            <label htmlFor="perfil">Perfil:</label>
                                            <input
                                                type="text"
                                                id="perfil"
                                                onChange={(event) => { setPerfil(event.target.value) }}
                                                placeholder="Digite seu Perfil:"
                                                required
                                            />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="cargo">Cargo:</label>
                                        <input
                                            type="text"
                                            id="cargo"
                                            onChange={(event) => { setCargo(event.target.value) }}
                                            placeholder="Digite aqui seu cargo:"
                                            required
                                        />
                                    </div>
                            </div>

                            <div className="card_form">
                                <div className="cad_box_input">
                                            <label htmlFor="status_atividade">Status:</label>
                                            <input
                                                type="text"
                                                id="status_atividade"
                                                onChange={(event) => { setStatusAtividade(event.target.value) }}
                                                placeholder="Digite aqui o status:"
                                                required
                                            />
                                </div>
                                <div className="cad_box_input">
                                        <label htmlFor="responsavel">Responsável:</label>
                                        <input
                                            type="text"
                                            id="responsavel"
                                            onChange={(event) => { setResponsavel(event.target.value) }}
                                            placeholder="Digite aqui seu responsável:"
                                            required
                                        />
                                 </div>
                            </div>

                            
                                {/* <div className="cad_box_input">
                                    <label htmlFor="foto">Foto:</label>
                                    /* Passar primeiro como exemplo *
                                    <input
                                        type="file"
                                        id="foto"
                                    
                                        required
                                    />
                                </div>*/}
                                {/*
                                <span>Endereço:</span>
                                <hr />


                                <div className="cad_linha_checkbox">
                                    <span>Cliente</span>
                                    
                                    <span>Desenvolvedor</span>
                                </div> */}
                                {/*<div className="cad_box_input">
                                            <hr />
                                            <div className="cad_box_skills">
                                                <span>Selecione o tipo de usuário:</span>
                                                <div className="cad_linha_select">
                                                    {/*<select
                                                        name="tipoUsuario"
                                                        id="cad_select_skill"
                                                        onChange={(e) => setSelect(e.target.value)}
                                                    >
                                                        <option selected disabled value="">Selecione</option>
                                                        {
                                                            techs.map((tech: any, index: number) => {
                                                                return <option key={index} value={tech}>{tech}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <select 
                                                        name="tipoUsuario"
                                                        id="cad_select_skill"
                                                        value={selectedtipoUsuario} 
                                                        onChange={(e) => setselectedTipoUsuario(e.target.value)}
                                                        >
                                                            <option value="ADM">ADM</option>
                                                            <option value="DEV">DEV</option>
                                                            <option value="GESTOR">GESTOR</option>
                                                            
                                                        </select>
                                                    {/*<button
                                                        type="button"
                                                        id="cad_btn_inserir"
                                                        onClick={adicionarUsuario}>
                                                        Inserir
                                                    </button>
                                                </div>
                                                <div id="cad_lista_skills">
                                                    {
                                                        usuariosSelecionados.length > 0 ? usuariosSelecionados.map((el: any, index: number) => {
                                                            return <div key={index} className="cad_item_skill">
                                                                <span className="cad_span_skill">{el}</span>
                                                                <button
                                                                    type="button"
                                                                    id="cad_item_excluir"
                                                                    onClick={() => excluirUsuario(el)}
                                                                    className="cad_item_excluir">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        height="1em"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        }) : <span className="cad_span_skill">Nenhum tipo de usuário atribuido</span>
                                                    }
                                                </div>
                                            </div>
                                </div>
                            */}

                                {/*<div className="cad_container_checkbox">
                                        <input
                                            className="cad_checkbox"
                                            type="checkbox"
                                            name="checkbox"
                                            id="checkbox"
                                        />
                                        <label className="cad_label" htmlFor="checkbox"></label>
                                        <div className="cad_box_checkbox"></div>
                                        <div className="cad_hard_skill">
                                            <span>Hard Skills</span>
                                            <hr />
                                            <div className="cad_box_skills">
                                                <span>Selecione uma Skill para adicionar</span>
                                                <div className="cad_linha_select">
                                                    <select
                                                        name=""
                                                        id="cad_select_skill"
                                                        onChange={(e) => setSelect(e.target.value)}
                                                    >
                                                        <option selected disabled value="">Selecione</option>
                                                        {
                                                            techs.map((tech: any, index: number) => {
                                                                return <option key={index} value={tech}>{tech}</option>
                                                            })
                                                        }
                                                    </select>
                                                    <button
                                                        type="button"
                                                        id="cad_btn_inserir"
                                                        onClick={adicionarUsuario}>
                                                        Inserir
                                                    </button>
                                                </div>
                                                <div id="cad_lista_skills">
                                                    {
                                                        usuariosSelecionados.length > 0 ? usuariosSelecionados.map((el: any, index: number) => {
                                                            return <div key={index} className="cad_item_skill">
                                                                <span className="cad_span_skill">{el}</span>
                                                                <button
                                                                    type="button"
                                                                    id="cad_item_excluir"
                                                                    onClick={() => excluirUsuario(el)}
                                                                    className="cad_item_excluir">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        height="1em"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        }) : <span className="cad_span_skill">Nenhuma skill cadastrada</span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            
                                <div className="cad_linha_checkbox">
                                    <span>Cliente</span>

                                    <span>Desenvolvedor</span>
                                </div>
                                */}
                        </div>
                        

                        
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>


    );

}
