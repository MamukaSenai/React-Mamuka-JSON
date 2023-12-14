import './style.css'


export default function DesenvolvedorDemandas2() {

    return (
        <>
            <div className='container'>
                <div className="header">
                    {/* <div className="title">Customer Issue Tracker</div> */}
                    <div className="search_box">
                        <input
                            type="text"
                            id="search_input"
                            placeholder="Filtre utilizando os IDs"
                        />
                    </div>
                </div>
            </div>

            <table className='tabelaGeral'>
                <thead>
                    <tr className='headertabela'>
                        <th>ID</th>
                        <th>Grupo</th>
                        <th>Nome</th>
                        <th>Cronograma</th>
                        <th>Status</th>
                        <th>Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>100/23</td>
                        <td>São Caetano 1.34</td>
                        <td>Laboratorio 1</td>
                        <td>
                            <div >Abril/23 - Nov/23</div>
                        </td>
                        <td className='campostatustabela andamento'>Andamento</td>
                        <td>Ricardo Souza</td>
                    </tr>
                    <tr>
                        <td>101/22</td>
                        <td>Vila Mariana 1.09</td>
                        <td>Laboratorio 2</td>
                        <td>
                            <div>Jan/22 - Jun/22</div>
                        </td>
                        <td className='campostatustabela concluido'>Concluído</td>
                        <td>Rodrigo Amaro</td>
                    </tr>
                    <tr>
                        <td>102/21</td>
                        <td>Brás 1.01</td>
                        <td>Oficina 1</td>
                        <td>
                            <div>Jan/23 - Fev/23</div>
                        </td>
                        <td className='campostatustabela cancelado'>Cancelado</td>
                        <td>Paulo Pereira</td>
                    </tr>
                    <tr>
                        <td>103/23</td>
                        <td>Vila Alpina 1.02</td>
                        <td>Biblioteca 1</td>
                        <td>
                            <div>Fev/23 - Nov/23</div>
                        </td>
                        <td className='campostatustabela andamento'>Andamento</td>
                        <td>Hugo Ramos</td>
                    </tr>
                    <tr>
                        <td>104/22</td>
                        <td>São Bernardo 1.20</td>
                        <td>Secretaria 1</td>
                        <td>
                            <div>Jun/22 - Dez/22</div>
                        </td>
                        <td className='campostatustabela concluido'>Concluído</td>
                        <td>Vagner Barros</td>
                    </tr>
                    <tr>
                        <td>105/23</td>
                        <td>Santo Andre 1.18</td>
                        <td>Processo Seletivo 1</td>
                        <td>
                            <div>Fev/23 - Set/23</div>
                        </td>
                        <td className='campostatustabela andamento'>Andamento</td>
                        <td>Moises Amparo</td>
                    </tr>
                    <tr>
                        <td>106/20</td>
                        <td>Diadema 1.25</td>
                        <td>Grade Curricular 2</td>
                        <td>
                            <div>Set/22 - Out/22</div>
                        </td>
                        <td className='campostatustabela cancelado'>Cancelado</td>
                        <td>Moacir Lima</td>
                    </tr>
                </tbody>

            </table>

        </>

    )

}