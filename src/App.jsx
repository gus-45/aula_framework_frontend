import React from "react";
import "./App.css";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import Footer from "./components/footer";
import TopBar from "./components/topbar";
import ContentHeader from "./components/ContentHeader";

function App() {
  function clickVideo() {
    alert("Em breve...");
  }

  return (
    <div>
      <TopBar/>

      <div className="container">
        <div className="sidebar">
          <ul>
            <SidebarItem
              texto="Início"
              subtitulo="Clique para ver os vídeos em destaque"
            />
            <SidebarItem texto="Sobre" subtitulo="Saiba mais" />
            <SidebarItem texto="Contato" subtitulo="Entre em contato conosco" />
          </ul>
        </div>

        <div className="content">
          
<ContentHeader/>
          <div className="videos">
            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=1"
                alt="Como Criar Componentes no React: Passo a Passo para Iniciantes"
              />
              <h3>
                Como Criar Componentes no React: Passo a Passo para Iniciantes
              </h3>
            </div>

            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=2"
                alt="React Hooks: Entendendo useState e useEffect na Prática"
              />
              <h3>React Hooks: Entendendo useState e useEffect na Prática</h3>
            </div>

            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=3"
                alt="Dominando JSX: Como Escrever Código Limpo e Eficiente em React"
              />
              <h3>
                Dominando JSX: Como Escrever Código Limpo e Eficiente em React
              </h3>
            </div>

            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=4"
                alt="Gerenciamento de Estado em React com Context API"
              />
              <h3>Gerenciamento de Estado em React com Context API</h3>
            </div>

            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=5"
                alt="Integrando APIs Externas no React: Consumindo Dados de Forma Eficiente"
              />
              <h3>
                Integrando APIs Externas no React: Consumindo Dados de Forma
                Eficiente
              </h3>
            </div>

            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=6"
                alt="Roteamento no React com React Router: Guia Completo"
              />
              <h3>Roteamento no React com React Router: Guia Completo</h3>
            </div>

            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=7"
                alt="Estilos no React com Styled-Components: A Forma Moderna de Trabalhar com CSS"
              />
              <h3>
                Estilos no React com Styled-Components: A Forma Moderna de
                Trabalhar com CSS
              </h3>
            </div>

            <div className="video-card" onClick={clickVideo}>
              <img
                src="https://picsum.photos/250/150?random=8"
                alt="React vs Angular vs Vue: Qual Framework Escolher para seu Projeto Frontend?"
              />
              <h3>
                React vs Angular vs Vue: Qual Framework Escolher para seu
                Projeto Frontend?
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
