import "../presentacion/presentacion.css";
import Container from "react-bootstrap/esm/Container";


const Presentacion = ( () => {
    return (

        <div>
            <Container style={{backgroundColor: '#1B2430'}}>
                <section className="presentation-section">
                        <p className='mi-nombre-es'>Hola, mi nombre es</p>
                        <h2 className='titulo-primera-linea'>
                            Mauro Mena.
                        </h2>
                        <h2 className="titulo-segunda-linea">Front-End Developer.</h2>
                        <div className="que-hago-caja">
                            <p className='que-hago'>
                                Soy un desarrollador de Aplicaciones Web en formación,
                                Me considero un apasionado del mundo Tech y un aficionado al diseño multimedial,
                                Fanático del futbol y la música en todas sus formas.
                            </p>
                        </div>
                </section>
            </Container>
        </div>
    )
})

export default Presentacion