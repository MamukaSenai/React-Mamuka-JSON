import "./style.css"
import { useEffect, useState } from "react";




function GestorCriarProjetos() {
    // useEffect(() => {
    //     //Inserindo o título da guia de endereço da página atual.
    //     document.title = "Mamuka - Lista de projetos";
    // }, []);

    const [nome, setNome] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [id, setId] = useState<string>("")
    const [grupo, setGrupo] = useState<string>("")
    const [inicio, setInicio] = useState<string>("")
    const [conclusao, setConclusao] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [gestor, setGestor] = useState<string>("")



    // function cadastrarServico(event: any) {
    //     event.preventDefault();

    //     formata.append("nome", nome)
    //     formdata.append("status", status)
    //     formdata.append("id", id)
    //     formdata.append("grupo", grupo)
    //     formdata.append("nome", nome)
    //     formdata.append("inicio", inicio)
    //     formdata.append("conclusao", conclusao)
    //     formdata.append("descricao", descricao)
    //     formdata.append("gestor", gestor)

    // }



    return (
        <main id="CriarProjetos">
            <span className="gestor">Gestor/Criar Projetos</span>
            <section className="right">
                <div className="container">
                    <form className="formulario" /* onSubmit={cadastrarServico}*/>
                        <section>
                            <div className="input-box">
                                <label htmlFor="firstname">Nome:</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    /*onChange={ (event) => {setNome(event.target.value)}}*/
                                    placeholder=" Laboratório 1"
                                    required
                                />
                            </div>
                            <div className="linha1">
                                <div className="input-box">
                                    <label htmlFor="ID_do_projeto">Status:</label>
                                    <input
                                        type="password"
                                        name="ID_do_projeto"
                                        /*onChange={ (event) => {setStatus(event.target.value)}}*/
                                        placeholder=" Andamento"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Status:">ID:</label>
                                    <input
                                        type="text"
                                        name="Status:"
                                        // onChange={ (event) => {setId(event.target.value)}}
                                        placeholder=" 100/23"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Responsáveis">Grupo:</label>
                                    <input
                                        type="text"
                                        name="Fase:"
                                        // onChange={ (event) => {setGrupo(event.target.value)}}
                                        placeholder=" São Caetano 1.34"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="linha2">
                                <div className="input-box">
                                    <label htmlFor="Conclusão">Inicio:</label>
                                    <input
                                        type="date"
                                        name="Inicio:"
                                        // onChange={ (event) => {setInicio(event.target.value)}}
                                        placeholder=" 28/11/2023"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Conclusão">Conclusão:</label>
                                    <input
                                        type="date"
                                        name="Conclusão"
                                        // onChange={ (event) => {setConclusao(event.target.value)}}
                                        placeholder=" 28/11/2023"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Gestor_do_projeto">Gestor do projeto:</label>
                                    <input
                                        type="text"
                                        name="Gestor do projeto"
                                        // onChange={ (event) => {setGestor(event.target.value)}}
                                        placeholder=" Ricardo Souza"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <label htmlFor="Responsáveis">Descrição:</label>
                                <textarea
                                    name="text"
                                    cols={20}
                                    rows={8}
                                    // onChange={ (event) => {setDescricao(event.target.value)}}
                                    placeholder=" Este projeto consistiu no desenvolvimento de uma aplicação mobile Android e iOS, para gestão de estacionamentos,em tecnologia C# .Net OutSystems (plataforma de low-code), bem como de BackEnd em tecnologia PHP WordPress, para suporte as operações."
                                    required
                                    defaultValue={""}
                                />
                            </div>
                            <div className="continue-button">
                                <button>Criar</button>
                            </div>
                        </section>
                    </form>
                </div>
            </section>
        </main>


    )

}

export default GestorCriarProjetos;