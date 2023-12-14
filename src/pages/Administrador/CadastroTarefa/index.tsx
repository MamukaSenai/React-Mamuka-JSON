import "./style.css";

//Hook
import { useState } from "react";

//axios
import api from "../../../utils/api";




export default function CadastroProjeto(props: any) {


    const [nome_tarefa, setNome_tarefa] = useState<string>("");
    const [status_tarefa, setStatus_tarefa] = useState<string>("");
    const [data_inicio, setData_inicio] = useState<string>("");
    const [data_conclusao, setData_conclusao] = useState<string>("");


    function cadastrarProjeto(event: any) {
        event.preventDefault();

        console.log("odosdnfisdnfisdjfn");
        

        //só utiliza formData quando tiver arquivos 
        const formData = new FormData();

        //A chave da função do append() precisa ser o mesmo nome_tarefa do atributo que api retorna
       

        formData.append("nome_tarefa", nome_tarefa);
        formData.append("status_tarefa", status_tarefa);
        
        formData.append("data_inicio", data_inicio);
        formData.append("data_conclusao", data_conclusao);


        console.log("chamadaaa API");
        

        api.post("tarefas", formData).then((response) => {
            console.log(response)
            alert("Projeto criado com sucesso! 😊🤗")
            // Navegação para login
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <main className="main_cadastro">
            <div className="container_cad">
                <div className="cad_conteudo">
                    <h1>Cadastro de Tarefa</h1>
                    <hr />
                    <form onSubmit={cadastrarProjeto} className="cad_formulario" method="POST">
                        <div className="card_box_org">
                            
                            <div className="card_form">
                                    <div className="cad_box_input">
                                        <label htmlFor="nome_tarefa">Nome da Tarefa:</label>
                                        <input
                                            type="text"
                                            id="nome_tarefa"
                                            onChange={(event) => { setNome_tarefa(event.target.value) }}
                                            placeholder="Digite aqui o nome do projeto:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="status_tarefa">Status da Tarefa:</label>
                                        <input
                                            type="text"
                                            id="status_tarefa"
                                            onChange={(event) => { setStatus_tarefa(event.target.value) }}
                                            placeholder="Digite aqui o status do projeto:"
                                            required
                                        />
                                    </div>     
                            </div>

                            <div className="card_form">
                                    <div className="cad_box_input">
                                        <label htmlFor="data_inicio">Data de inicio:</label>
                                        <input
                                            type="date"
                                            id="data_inicio"
                                            onChange={(event) => { setData_inicio(event.target.value) }}
                                            placeholder="Digite a data de inicio:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="data_conclusao">Data de conclusão::</label>
                                        <input
                                            type="date"
                                            id="data_conclusao"
                                            onChange={(event) => { setData_conclusao(event.target.value) }}
                                            placeholder="Digite data de conclusão:"
                                            required
                                        />
                                    </div>
                                    
                                    
                                    
                            </div>
           
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>


    );

}
