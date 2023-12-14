import "./style.css"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function BotaoDropDown() {
    // let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
    // let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    // let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

    // let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

    // if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
    //   menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
    //   sombra.style.right = "-10vw"; // Move a sombra para a direita
    //   menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
    //   menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
    //   body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    // } else {
    //   menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
    //   sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
    //   menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
    //   menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
    //   body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
    // }
    // menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
  
  return (
    
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button id="menuGeral" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <span>
               <FaBars className="botaoHamburguer" size={28} aria-hidden="true" />
               {/* <i className="fa-solid fa-bars"></i> */}
            </span>
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
                
        <Menu.Items id="conteudoMenu" className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="menuItens" >
            <div className="menuTesteConteudo">
            <Menu.Item>
              {({ active }) => (
                <Link to="cadastro/usuario" 
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm')} >Cadastro
                  
                </Link>
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="listadevs"  
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>Consulta
                  
                </Link>

              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="dashboard"  
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>Dashboard
                </Link>
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="devdemandas"  
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>Demandas
                </Link>
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="gestorprojetos" 
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>Projetos
                </Link>
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="cadastro/projeto"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>Criar Projetos
                </Link>
                
              )}
            </Menu.Item>        
            <Menu.Item>
              {({ active }) => (
                <Link to="cadastro/tarefa"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>Criar Demandas
                </Link>
                
              )}
            </Menu.Item>        
            </div>
            
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item> */}
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      )
    }

