
// //rotas
// import { Link, useParams } from "react-router-dom";

// //hooks
// import { useState, useEffect } from "react";

// //estilização
// import "./style.css";


// //import imagens
// import MENU from "../../../assets/MENU.png";
// import PessoaPerfil from "../../../assets/PessoaPerfil.png";
// import React from "react";
//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";


//import imagens
import MENU from "../../../assets/MENU.png";
import PessoaPerfil from "../../../assets/PessoaPerfil.png";
import React from "react";



function Administradorperfil() {

  // const [] = useState<>("")
  // const [] = useState<>("")
  // const [] = useState<>("")
  // const [] = useState<>("")

  return (

    <main id="Administradorperfil">
      <div className="linha_sup_status">
        <div className="linha_sup_esq">
          <p>Administrador / Perfil</p>
        </div>
      </div>
      <div className="limiteformulario">
        <div className="fotoNovoUsuario">
          <img src={PessoaPerfil}/>
          
        </div>
        {/* primeira linha do formulario  */}
        <div className="linha1">
          <div className="linha1Coluna1">
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder="Ricardo Souza" />
          </div>
          <div className="linha1Coluna2">
            <label htmlFor="id">ID:</label>
            <input type="text" name="id" id="id" placeholder="899878321" />
          </div>
        </div>
        {/* segunda linha do formulario  */}
        <div className="linha2">
          <div className="linha2Coluna1">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="ricardosouza1980@gmail.com"
            />
          </div>
          <div className="linha2Coluna2">
            <label htmlFor="status">Status:</label>
            <input type="text" name="status" id="status" placeholder="Ativo" />
          </div>
        </div>
        {/* terceira linha do formulario  */}
        <div className="linha3">
          <div className="linha3Coluna1">
            <label htmlFor="cargo">Cargo:</label>
            <input type="text" name="cargo" id="cargo" placeholder="Gerente" />
          </div>
          <div className="linha3Coluna2">
            <label htmlFor="depart">Departamento:</label>
            <input type="text" name="depart" id="depart" placeholder="Financeiro" />
          </div>
          <div className="linha3Coluna3">
            <label htmlFor="resp">Responsável:</label>
            <input type="text" name="resp" id="resp" placeholder="Eduardo Matos" />
          </div>
        </div>
        {/* quarta linha do formulario  */}
        <div className="linha4">
          <div className="linha4Coluna1">
            <label htmlFor="perfil">Perfil:</label>
            <input
              type="text"
              name="perfil"
              id="perfil"
              placeholder="Administrador"
            />
          </div>
          <div className="linha4Coluna2">
            <label htmlFor="datai">Integração:</label>
            <input type="text" name="datai" id="datai" placeholder="23/02/2023" />
          </div>
          <div className="linha4Coluna3">
            <label htmlFor="pais">País:</label>
            <input type="text" name="pais" id="pais" placeholder="Brasil" />
          </div>
          <div className="linha4Coluna4">
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" name="cidade" id="cidade" placeholder="São Paulo" />
          </div>
        </div>
        {/* </div> */}
        {/* quinta linha do formulario  */}
        <div className="linha5">
          <div className="linha5Coluna1">
            <label htmlFor="estado">Estado:</label>
            <input type="text" name="estado" id="estado" placeholder="São Paulo" />
          </div>
          <div className="linha5Coluna2">
            <label htmlFor="local">Localização:</label>
            <input type="text" name="local" id="local" placeholder="Filial" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </main>

  )

}

export default Administradorperfil;





// function Administradorperfil() {

//   // const [] = useState<>("")
//   // const [] = useState<>("")
//   // const [] = useState<>("")
//   // const [] = useState<>("")

//   return (

//     <main>
//       <div className="linha_sup_status">
//         <div className="linha_sup_esq">
//           <p>Administrador / Perfil</p>
//         </div>
//       </div>
//       <div className="limiteformulario">
//         <div className="fotoNovoUsuario">
//           <img src="..\src\assets\PessoaPerfil.png"/>
          
//         </div>
//         {/* primeira linha do formulario  */}
//         <div className="linha1">
//           <div className="linha1Coluna1">
//             <label htmlFor="name">Nome:</label>
//             <input type="text" name="name" id="name" placeholder="Ricardo Souza" />
//           </div>
//           <div className="linha1Coluna2">
//             <label htmlFor="id">ID:</label>
//             <input type="text" name="id" id="id" placeholder={899878321} />
//           </div>
//         </div>
//         {/* segunda linha do formulario  */}
//         <div className="linha2">
//           <div className="linha2Coluna1">
//             <label htmlFor="email">E-mail:</label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               placeholder="ricardosouza1980@gmail.com"
//             />
//           </div>
//           <div className="linha2Coluna2">
//             <label htmlFor="status">Status:</label>
//             <input type="text" name="status" id="status" placeholder="Ativo" />
//           </div>
//         </div>
//         {/* terceira linha do formulario  */}
//         <div className="linha3">
//           <div className="linha3Coluna1">
//             <label htmlFor="cargo">Cargo:</label>
//             <input type="text" name="cargo" id="cargo" placeholder="Gerente" />
//           </div>
//           <div className="linha3Coluna2">
//             <label htmlFor="depart">Departamento:</label>
//             <input type="text" name="depart" id="depart" placeholder="Financeiro" />
//           </div>
//           <div className="linha3Coluna3">
//             <label htmlFor="resp">Responsável:</label>
//             <input type="text" name="resp" id="resp" placeholder="Eduardo Matos" />
//           </div>
//         </div>
//         {/* quarta linha do formulario  */}
//         <div className="linha4">
//           <div className="linha4Coluna1">
//             <label htmlFor="perfil">Perfil:</label>
//             <input
//               type="text"
//               name="perfil"
//               id="perfil"
//               placeholder="Administrador"
//             />
//           </div>
//           <div className="linha4Coluna2">
//             <label htmlFor="datai">Integração:</label>
//             <input type="text" name="datai" id="datai" placeholder="23/02/2023" />
//           </div>
//           <div className="linha4Coluna3">
//             <label htmlFor="pais">País:</label>
//             <input type="text" name="pais" id="pais" placeholder="Brasil" />
//           </div>
//           <div className="linha4Coluna4">
//             <label htmlFor="cidade">Cidade:</label>
//             <input type="text" name="cidade" id="cidade" placeholder="São Paulo" />
//           </div>
//         </div>
//         {/* </div> */}
//         {/* quinta linha do formulario  */}
//         <div className="linha5">
//           <div className="linha5Coluna1">
//             <label htmlFor="estado">Estado:</label>
//             <input type="text" name="estado" id="estado" placeholder="São Paulo" />
//           </div>
//           <div className="linha5Coluna2">
//             <label htmlFor="local">Localização:</label>
//             <input type="text" name="local" id="local" placeholder="Filial" />
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </main>

//   )

// }

// export default Administradorperfil;

