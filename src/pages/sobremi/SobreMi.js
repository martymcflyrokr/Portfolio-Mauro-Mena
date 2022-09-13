import "../sobremi/sobremi.css"
import { Row, Col } from "react-bootstrap"

const SobreMi = (() => {

    return(
        <section className="seccion-sobre-mi">
            <h2>Sobre mí</h2>
            <Row className="row-texto-e-imagen" >
                <Col className="columna-texto" sm={12} md={12} lg={6} xl={6} >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat tempora
                        provident aliquam nesciunt suscipit quas qui temporibus corrupti, ea unde magni
                        doloremque ad, ullam, consectetur esse voluptatem! Perspiciatis iusto ab culpa,
                        fuga amet dolorum totam aspernatur explicabo, in, consectetur accusamus
                        reprehenderit id enim. Excepturi ab, debitis soluta architecto maiores mollitia
                    </p>      
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat tempora
                        provident aliquam nesciunt suscipit quas qui temporibus corrupti, ea unde magni
                        doloremque ad, ullam, consectetur esse voluptatem! Perspiciatis iusto ab culpa,
                        fuga amet dolorum totam aspernatur explicabo, in, consectetur accusamus
                        reprehenderit id enim. Excepturi ab, debitis soluta architecto maiores mollitia
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat tempora
                        provident aliquam nesciunt suscipit quas qui temporibus corrupti, ea unde magni
                        doloremque ad, ullam, consectetur esse voluptatem! Perspiciatis iusto ab culpa,
                        fuga amet dolorum totam aspernatur explicabo, in, consectetur accusamus
                        reprehenderit id enim. Excepturi ab, debitis soluta architecto maiores mollitia
                    </p>
                    <ul className="lista-skills">
                        <Row className="grilla-sobre-mi">
                            <Col>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                            </Col>
                            <Col>
                                <li>REACT JS</li>
                                <li>GITHUB</li>
                                <li>FIREBASE</li>
                            </Col>
                        </Row>
                    </ul>            
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} className="columna-imagen">
                    <div className="contenedor-img">
                        <img src="foto_mm.jpg" className="imagen-mia"/>
                    </div>
                </Col>
            </Row>
        </section>
    )
})

export default SobreMi