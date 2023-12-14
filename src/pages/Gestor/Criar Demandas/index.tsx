import  "./style.css";


function GestorCriarDemandas() {
    return (
        <>
            <main id="CriarDemandas">
                <span className="gestor">Gestor/Criar Demandas</span>
                <section className="right">
                    <div className="container">
                        <form className="formulario">
                            <section>
                                <div className="input-box">
                                    <label htmlFor="firstname">Nome do projeto:</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder=" Laboratório 1"
                                        // required=""
                                    />
                                </div>
                                <div className="linha1">
                                    <div className="input-box">
                                        <label htmlFor="ID_do_projeto">ID do projeto:</label>
                                        <input
                                            type="password"
                                            name="ID_do_projeto"
                                            placeholder=" 100/23"
                                            // required=""
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Status:">Status:</label>
                                        <input
                                            type="text"
                                            name="Status:"
                                            placeholder=" Inicial"
                                            // required=""
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Responsáveis">Fase:</label>
                                        <input
                                            type="text"
                                            name="Fase:"
                                            placeholder=" Fase 1"
                                            // required=""
                                        />
                                    </div>
                                </div>
                                <div className="linha2">
                                    <div className="input-box">
                                        <label htmlFor="Conclusão">Inicio:</label>
                                        <input
                                            type="date"
                                            name="Inicio:"
                                            placeholder=" 28/11/2023"
                                            // required=""
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Conclusão">Conclusão:</label>
                                        <input
                                            type="date"
                                            name="Conclusão"
                                            placeholder=" 28/11/2023"
                                            // required=""
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Gestor_do_projeto">Gestor do projeto:</label>
                                        <input
                                            type="text"
                                            name="Gestor do projeto"
                                            placeholder=" Ricardo Souza"
                                            // required=""
                                        />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Responsáveis">Responsáveis:</label>
                                    <textarea
                                        name="text"
                                        cols={20}
                                        rows={8}
                                        placeholder="  Nicolas de Oliveira e Trellini"
                                        // required=""
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


        </>
    )
}

export default GestorCriarDemandas;