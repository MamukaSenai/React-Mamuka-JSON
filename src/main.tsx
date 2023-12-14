import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aside from './components/Aside'
import Header from './components/Header'
import Home from '../src/pages/Administrador/Home'
import GestorCriarDemandas from './pages/Gestor/Criar Demandas'
import GestorProjetos from './pages/Gestor/Projetos'
import GestorPerfil from '../src/pages/Gestor/Perfil'
import GestorLogin from './pages/Gestor/Login'
import GestorCriarProjetos from './pages/Gestor/Criar Projetos'
// falta admperfil
import AdministradorConsulta from './pages/Administrador/Consulta'
import AdministradorLogin from './pages/Administrador/Login'
import CadastroInfosPessoais from './pages/Administrador/CadastroInfosPessoais'
import CadastroInfosCorporativas from './pages/Administrador/CadastroInfosCorporativas'
import CadastroInfosConclusao from './pages/Administrador/CadastroInfosConclusão'
import DesenvolvedorPerfil from '../src/pages/Desenvolvedor/Perfil/index'
import DesenvolvedorLogin from './pages/Desenvolvedor/Login'
import DesenvolvedorDemandas from './pages/Desenvolvedor/Demandas'
import Dashboard from './pages/Gestor/Dashboard'
import Administradorperfil from './pages/Administrador/Perfil'
import DesenvolvedorDemandas2 from './pages/Desenvolvedor/Demandas teste'


/* NOVO*/
import ListaDevs from './pages/Administrador/ListaDevs'
import PerfilUsuario from './pages/Administrador/PerfilUsuario'
import CadastroUsuario from './pages/Administrador/CadastroUsuario'
import Login from './pages/Administrador/Login'
import Login2 from './pages/Administrador/Login2'
import VisualizarTarefa from './pages/Administrador/VisualizarTarefa'
import CadastroProjeto from './pages/Administrador/CadastroProjeto'
import CadastroTarefa from './pages/Administrador/CadastroTarefa'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        {/* As paginas de login vao ter header e aside? - Se nao, como retirar o aside e o header? */}
        {/* PAGINAS DE ADM */}
        <Route path="/" element={<Home />} />
        <Route path="admconclusao" element={<CadastroInfosConclusao />} />
        <Route path="admcorporativas" element={<CadastroInfosCorporativas />} />
        <Route path="admpessoais" element={<CadastroInfosPessoais />} />
        <Route path="admlogin" element={<AdministradorLogin />} />
        <Route path="admconsulta" element={<AdministradorConsulta />} />
        <Route path="admperfil" element={<Administradorperfil />} />

        <Route path='listadevs' element={<ListaDevs />} />
        <Route path='perfil/:idUsuario' element={<PerfilUsuario />} />
        <Route path='cadastro/usuario' element={<CadastroUsuario />} />
        {/* <Route path='login' element={< Login />} /> */}
        <Route path='login' element={< Login2 />} />
        <Route path='visualizartarefa' element={< VisualizarTarefa />} />
        <Route path='cadastro/projeto' element={< CadastroProjeto />} />
        <Route path='cadastro/tarefa' element={< CadastroTarefa />} />
        

        {/* PAGINAS DE DEV */}
        <Route path="devdemandas" element={< DesenvolvedorDemandas />} />
        <Route path="devdemandas2" element={< DesenvolvedorDemandas2 />} />
        <Route path="devlogin" element={<DesenvolvedorLogin />} />
        <Route path="devperfil" element={<DesenvolvedorPerfil />} />
        {/* PAGINAS DE GESTOR */}
        <Route path="gestorcriardemandas" element={<GestorCriarDemandas />} />
        <Route path="gestorcriarprojetos" element={<GestorCriarProjetos />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gestorlogin" element={<GestorLogin />} />
        <Route path="gestorperfil" element={<GestorPerfil />} />
        <Route path="gestorprojetos" element={<GestorProjetos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
