import React from "react";
import "./App.css";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import Topbar from "./components/Topbar/Topbar";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import Footer from "./components/Footer/Footer";
import VideoCard from "./components/VideoCard/VideoCard";

function App() {
  return (
    <div>
      <Topbar />

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
          <ContentHeader titulo={"Vídeos em Destaque"} />

          <div className="videos">
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=1"}
              titulo={
                "Como Criar Componentes no React: Passo a Passo para Iniciantes"
              }
            />
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=2"}
              titulo={"React Hooks: Entendendo useState e useEffect na Prática"}
            />
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=3"}
              titulo={
                "Dominando JSX: Como Escrever Código Limpo e Eficiente em React"
              }
            />
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=4"}
              titulo={"Gerenciamento de Estado em React com Context API"}
            />
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=5"}
              titulo={
                "Integrando APIs Externas no React: Consumindo Dados de Forma Eficiente"
              }
            />
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=6"}
              titulo={"Roteamento no React com React Router: Guia Completo"}
            />
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=7"}
              titulo={
                "Estilos no React com Styled-Components: A Forma Moderna de Trabalhar com CSS"
              }
            />
            <VideoCard
              imagem={"https://picsum.photos/250/150?random=8"}
              titulo={
                "React vs Angular vs Vue: Qual Framework Escolher para seu Projeto Frontend?"
              }
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
