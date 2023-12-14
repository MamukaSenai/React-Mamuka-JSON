import './style.css';
import React, { useState, useEffect } from 'react';
import api from "../../../utils/api";
import { Link } from "react-router-dom";
import axios from 'axios';



interface UserData {
  id: number;
  nome_projeto: string;
  data_inicio: string;
  data_conclusao: string;
  status_projeto: string;
  responsavel: string;
}

export default function GestorProjetos() {

  
  const [dados, setDados] = useState<UserData[]>([]);
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroTermo, setFiltroTermo] = useState('');

  useEffect(() => {
    api.get("projetos")
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error("A conexão falhou =/", error);
      });
  }, []);

  

  const getStatusClassName = (status: string) => {
    switch (status.toLowerCase()) {
      case 'cancelado':
        return 'status-cancelado';
      case 'andamento':
        return 'status-andamento';
      case 'concluido':
        return 'status-concluido';
      default:
        return '';
    }
  };

  const filtrarDados = () => {
    return dados.filter(item =>
      item.status_projeto.toLowerCase().includes(filtroStatus.toLowerCase()) &&
      (item.nome_projeto.toLowerCase().includes(filtroTermo.toLowerCase()) ||
        item.responsavel.toLowerCase().includes(filtroTermo.toLowerCase()))
    );
  };

  const dadosFiltrados = filtrarDados();

  return (
    <div>
      <div className='filtro-projeto-responsavel'>
        <p>Filtre por Projeto ou Responsável</p>
        <input
          type="text"
          placeholder="Digite o Projeto ou responsável"
          value={filtroTermo}
          onChange={(e) => setFiltroTermo(e.target.value)}
        />
      </div>
      <div className='filtro-status-projetos'>
        <label>Filtrar por Status:</label>
        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Andamento">Andamento</option>
          <option value="Concluido">Concluído</option>
        </select>
      </div>
      <table className='tabela-geral-projetos'>
        <thead className='header-tabela-projetos'>
          <tr>
            <th>ID</th>
            <th>Projeto</th>
            <th>Cronograma</th>
            <th>Status</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody className='corpo-tabela-projetos'>
          {dadosFiltrados.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><Link to="/devdemandas" className="link">{item.nome_projeto} </Link></td>
              <td>{item.data_inicio} a {item.data_conclusao}</td>
              <td className={getStatusClassName(item. status_projeto)}>{item. status_projeto}</td>
              <td>{item.responsavel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
