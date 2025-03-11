import React from "react";
import "./App.css";
import SidebarItem from "./components/SidebarItem/SidebarItem";
<<<<<<< HEAD
import Topbar from "./components/Topbar/Topbar";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import Footer from "./components/Footer/Footer";
import VideoCard from "./components/VideoCard/VideoCard";
=======
import Footer from "./components/footer";
import TopBar from "./components/topbar";
import ContentHeader from "./components/ContentHeader";
>>>>>>> 3cb2bc6da212d38d0e0d4b7ca33554748ee5093b

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Topbar />
=======
      <TopBar/>
>>>>>>> 3cb2bc6da212d38d0e0d4b7ca33554748ee5093b

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
<<<<<<< HEAD
          <ContentHeader titulo={"Vídeos em Destaque"} />

=======
          
<ContentHeader/>
>>>>>>> 3cb2bc6da212d38d0e0d4b7ca33554748ee5093b
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

<<<<<<< HEAD
      <Footer />
=======
      <Footer/>
>>>>>>> 3cb2bc6da212d38d0e0d4b7ca33554748ee5093b
    </div>
  );
}

export default App;
