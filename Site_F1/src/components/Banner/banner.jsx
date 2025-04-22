import './banner.scss'

function Banner() {
    return (
        <div className="main">
            <aside className="coluna">
                <div className="noticias">
                    <h1>Notícias</h1>
                    <p>Onde estava George Russel?</p>
                    <button>Saiba Mais</button>

                </div>
                <div className="temporada">
                    <h1>Temporada</h1>
                    <p>Como está a tabela da tempoada?</p>
                    <button>Saiba Mais</button>
                </div>

            </aside>
            <section className="banner">
            </section>
        </div>
    )
}

export default Banner