import './style.css';
import React, { useState } from 'react';

interface UserData {
  id: number;
//   grupo: string;
  projeto: string;
  cronograma: string;
  status: string;
  responsavel: string;
}

export default function DesenvolvedorDemandas() {
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroTermo, setFiltroTermo] = useState('');

  const getStatusClassName = (status: string) => {
    switch (status.toLowerCase()) {
      case 'cancelado':
        return 'status-cancelado';
      case 'andamento':
        return 'status-andamento';
      case 'concluido':
        return 'status-concluido';
      default:
        return ''; // Adicione mais casos conforme necessário
    }
  };
  // Dados fixos
  const dados: UserData[] = [
    {
      id: 1,
    //   grupo: 'testestestestestestestes',
      projeto: 'Projeto teste',
      cronograma: '02/06/2025',
      status: 'Cancelado',
      responsavel: 'Roberto',
    },
    {
      id: 2,
    //   grupo: 'testestestestestestestes',
      projeto: 'Projeto 01',
      cronograma: '02/06/2025',
      status: 'Andamento',
      responsavel: 'Andre',
    },
    {
        id: 3,
        // grupo: 'testestestestestestestes',
        projeto: 'Projeto 04',
        cronograma: '02/06/2025',
        status: 'Concluido',
        responsavel: 'Andre',
      },
      {
        id: 4,
        // grupo: 'testestestestestestestes',
        projeto: 'Projeto 05',
        cronograma: '02/06/2023',
        status: 'Concluido',
        responsavel: 'Jose',
      },
    // ... outros dados aqui
  ];

  // Função para aplicar os filtros
  const filtrarDados = () => {
    return dados.filter(item =>
      item.status.toLowerCase().includes(filtroStatus.toLowerCase()) &&
      (item.projeto.toLowerCase().includes(filtroTermo.toLowerCase()) ||
       item.responsavel.toLowerCase().includes(filtroTermo.toLowerCase()))
    );
  };

  const dadosFiltrados = filtrarDados();

  return (
    <div>
      {/* Input para o filtro de status */}
      <div className='filtro-status-tarefa'>
      {/* <label>Filtrar por Status:</label>
      <select
        value={filtroStatus}
        onChange={(e) => setFiltroStatus(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="Cancelado">Cancelado</option>
        <option value="Andamento">Andamento</option>
        <option value="Concluido">Concluído</option> */}
        {/* Adicione mais opções conforme necessário */}
      {/* </select> */}
      </div>
      {/* Input para a barra de busca de nome e responsável */}
      <div className='filtro-tarefa-responsavel'>
      {/* <label>Pesquisar por Projeto/Responsável:</label> */}
      {/* <input
        type="text"
        placeholder="Digite o Projeto ou responsável"
        value={filtroTermo}
        onChange={(e) => setFiltroTermo(e.target.value)}
      /> */}
        </div>
      {/* Tabela de dados filtrados */}
      <table className='tabela-geral-tarefa'>
        <thead className='header-tabela-tarefa'>
          <tr>
            <th>ID</th>
            {/* <th>Grupo</th> */}
            <th>Projeto</th>
            <th>Cronograma</th>
            <th>Status</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody className='corpo-tabela-tarefa'>
          {dadosFiltrados.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {/* <td>{item.grupo}</td> */}
              <td>{item.projeto}</td>
              <td>{item.cronograma}</td>
               <td className={getStatusClassName(item.status)}>{item.status}</td>
              <td>{item.responsavel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
