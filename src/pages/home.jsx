import Projeto from '../componentes/projetoUnidade'
import useRevealOnScroll from '../componentes/revealScroll';
import foto1 from '../assets/telaMenu.png';
import foto2 from '../assets/Cjogo.png';
import foto3 from '../assets/abutrinho.png';
import foto4 from '../assets/abutrinhoFalha.png';
import foto5 from '../assets/arduino-ai.jpeg';
import foto6 from '../assets/arduinoDestaque.png';
import foto7 from '../assets/jarrobox.jpeg';

function Home(){
  useRevealOnScroll();

    return(
    <div className="containerPrincipal">
       <div className="tituloPrincipal">
        <h2>PROGRAMADOR</h2>
       </div>
       {/*
       <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
       </div>
       */}
       <div className="subTitulo">
        <h4>
            Sou desenvolvedor Full Stack<br></br>
            Faço Modelagem 3D<br></br>
            Desenvolvo Video Games<br></br>
        </h4>
       </div>

       <div className="tituloPrincipal2">
        <h2>ARTISTA 3D</h2>
       </div>

       <div className="containerProjetos">
        <div className="interno">
            <h3 className="tituloC reveal">Projetos</h3>
            <div className="reveal space">
               <Projeto ordem="projeto" imagens={[foto1,foto2]} titulo="Blob's Dungeon" link="https://github.com/BrunoDornelas2/Blobs-Dungeon" subTitulo="Projeto da Faculdade" texto="Este jogo foi desenvolvido inteiramente em linguagem C, utilizando a técnica de raycasting. Ele foi inspirado em um projeto originalmente criado em C++, que eu converti e aprimorei. O desafio, proposto pela minha faculdade, consistia em criar um jogo utilizando apenas a linguagem C e a tabela ASCII, e este foi o resultado. O projeto foi premiado como 'projeto destaque'."/>
            </div>
            <div className="reveal space">
                <Projeto ordem="inverseProjeto" imagens={[foto3,foto4]} titulo="Abutrinho" link="https://github.com/BrunoDornelas2/Abutrinho" subTitulo="Projeto da Faculdade" texto="Este jogo é uma paródia de um jogo de azar, desenvolvido com o objetivo de ensinar lógica proposicional de forma humorística, utilizando HTML, CSS e JavaScript. O projeto foi premiado como 'projeto destaque'."/>
            </div>
            <div className="reveal space">
                <Projeto ordem="projeto" imagens={[foto5,foto6]} titulo="Arduino controlado por AI" link="https://github.com/BrunoDornelas2/AI-Control-Machines" subTitulo="Projeto da Faculdade" texto="Este projeto foi desenvolvido com o objetivo de utilizar uma inteligência artificial para controlar um Arduino, gerando comandos para o dispositivo com base nas respostas da IA, utilizando Python como linguagem intermediária. O projeto foi premiado como 'projeto destaque'. Mais informações no site do projeto: https://brunodornelas2.github.io/Site-AICM/"/>
            </div>
            <div className="reveal space">
                <Projeto ordem="inverseProjeto" imagens={[foto7]} titulo="JarroBox" link="https://github.com/BrunoDornelas2/JarroBox" subTitulo="Projeto da Faculdade" texto="O webaplicativo funciona como um armazém capaz de gerenciar itens de qualquer tipo, permitindo a adição de categorias. O projeto foi desenvolvido utilizando HTML, CSS, JavaScript, Python e Electron."/>
            </div>          
        </div>
       </div>
       <div className="container reveal">
        <div className="interno">
            <h3 className="tituloC">Sobre Mim</h3>
            <p className='sobre'>Sou um desenvolvedor apaixonado por aprimorar continuamente minhas habilidades, dedicando-me constantemente ao estudo e ao autodesenvolvimento. Com formação em Biologia, realizei uma transição de carreira para a área de tecnologia e desenvolvimento, trazendo uma perspectiva única. Proativo e com aptidão para liderança, estou entusiasmado para colaborar e construir projetos incríveis!</p>
        </div>
       </div>
       <div className="container reveal">
        <div className="interno" style={{marginBottom: '30px'}}>
            <h3 className="tituloC">Contato</h3>
            <div className='containerContato'>
                <p>Email: brunodornelas02@gmail.com</p>
                <div className='links'>
                    <a href="https://github.com/BrunoDornelas2" target="_blank">
                        <i class="fa-brands fa-github fa-2xl" style={{color: 'var(--primary-accent)'}}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bruno-dornelas-423b38174/" target="_blank">
                        <i class="fa-brands fa-linkedin fa-2xl" style={{color: 'var(--primary-accent)'}}></i>
                    </a>
                </div>
            </div>
        </div>
       </div>
    </div>
    )
}

export default Home;