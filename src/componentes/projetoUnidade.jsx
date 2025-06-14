import React from "react";

function Projeto({ordem, imagens, titulo, link, subTitulo, texto}){
    const [indexImagem, setIndexImagem] = React.useState(0);

    const proximaImagem = () => {
        setIndexImagem((prevIndex) => (prevIndex + 1) % imagens.length);
    };

    const imagemAnterior = () => {
        setIndexImagem((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
    };

    return(
        <div className={ordem}>
            <div className="imagemProjeto">
                <img className="img" src={imagens[indexImagem]} alt={titulo} />

                {imagens.length > 1 && (
                    <>
                        <button className="seta" onClick={imagemAnterior}>
                            ◀
                        </button>
                        <button className="seta" onClick={proximaImagem}>
                            ▶
                        </button>
                    </>
                )}
            </div>
            <div className="explicaoProjeto">
                <div className="headerProjeto">
                    <h3 className="titulo">{titulo}</h3>
                    <a href={link} target="_blank" style={{marginRight: '5px'}}>
                        <span className="fa-brands fa-github fa-lg" style={{color: 'var(--primary-accent)'}}></span>
                    </a>
                </div>
                <h4 className="subT">{subTitulo}</h4>
                <p className="texto">
                    {texto}
                </p>
            </div>
        </div>
    )
}

export default Projeto;