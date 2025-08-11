import '../estilos/componentes/paginas/Home.css';
import React from "react";


const Home = (props)=> {
    return (
        <div className="holder">
            <div className="homeimg">
                <img className="foto_inicio" src="images/home/home.jpg"  alt="Carga"/>
            </div>
            <div className="columnas">
                <div className="columna uno">
                    <h2>Personas </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit quae,
                        natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                        dolores natus.
                    </p>
                </div>
                    <div className="columna dos">
                    <h2>PYMES </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe optio dignissimos, temporibus
                        sed rem labore esse eveniet nam quo natus at harum culpa reprehenderit consequatur ratione? Nostrum,
                        exercitationem expedita!
                    </p>
                </div>
                <div className="columna tres">
                    <h2>Corporativos </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe optio dignissimos, temporibus
                        sed rem labore esse eveniet nam quo natus at harum culpa reprehenderit consequatur ratione? Nostrum,
                        exercitationem expedita!
                    </p>
                </div>
                </div>
        </div>
    );
}

export default Home;