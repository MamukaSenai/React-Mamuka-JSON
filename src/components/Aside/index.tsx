/* Fazer com que quando o usuario clicar no dropdown,
 ele preencha o aside com o background azul escuro */

/* Tentar fazer um onClick no index.tsx e depois estilizar no css */
/* Talvez a função tenha que ser separada, ou seja, faço a função do DropDown e depois
coloco ela na função do Aside, assim, acho que consigo fazer com onClick */

import BotaoDropDown from "../BotaoDropDown";
import "./style.css"
// imports da função de dropdown do bootstrap


export default function Aside() {
    return (
            <aside>
                <nav className="menu">
                    {/* <div onClick={BotaoDropDown()}></div> */}
                <BotaoDropDown />
                </nav>

                {/* <div className="testess">
                    Teste
                    Teste
                    Teste
                    Teste
                </div> */}
            </aside>
    );
}


                {/* <div className="testess">
                    Teste
                    Teste
                    Teste
                    Teste
                </div> */}
//             </aside>
//         </>
//     );
// }