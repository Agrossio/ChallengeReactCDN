// Import custom methods
import { API } from "../../globals/CustomHooks";
import { ButtonOffcanvasEnd, OfcanvasEnd } from "../../globals/CustomComponents";

// React dependecies
const { useState, useEffect, createContext, useContext, useRef } = React;

const App = () => {

    return (
        <div id='body'>
            <Header />
            <Navbar />
            <Content />
            <ButtonOffcanvasEnd id='addExpense' title='Agregar nuevo gasto' button='Nuevo gasto personal' body={Header} callback={''} />
            <Footer />

        </div>
    )
}

const Header = () => {
    return (
        <header>
            <div id="logo-container"></div>

            <div>
                <div>BurgerLast</div>
                <div>Juan del Campillo 1413</div>
                <div id="socials">
                    <a href="https://wa.me/5493424416404" target="_blank"><img src="https://precios.gesprender.com/assets/wsp.png" alt="whatsapp" /></a>
                    <a href="https://instagram.com/gesprender" target="_blank"><img src="https://precios.gesprender.com/assets/instagram.png" alt="instagram" /></a>
                </div>
            </div>
        </header>
    );
}

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-2 text-light">Navbar</nav>
    )
}

export const Content = () => {

    const productsArray = [
        {
            name: "burger1",
            price: "$100",
            description: "Pan especial + Burguer + Cheddar"
        },
        {
            name: "burger2",
            price: "$200",
            description: "Pan standar + Burguer + Tomato"
        },
        {
            name: "burger3",
            price: "$300",
            description: "Pan especial + Burguer + Chedar"
        },
    ]



    
    return (
        <div className="content">

            <Accordion category={"🍔Burgers"} products={productsArray} />

        </div>
    )
}

export const Accordion = ({ category, products }) => {
    return (
        <div className="accordion" id={`_${category}`} >
            <div id={`ancla_${category}`}></div>
            <div className="accordion-item m-2">
                <h2 className="accordion-header" id={`__${category}`}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${category}`} aria-expanded="true" aria-controls={`${category}`} style={{ "width": "100%", "height": "70px", "fontSize": "21px", "fontWeight": "400" }}>
                        {category}
                    </button>
                </h2>
                <div id={`${category}`} className="accordion-collapse collapse show" aria-labelledby={`__${category}`} data-bs-parent={`#_${category}`}>
                    <div className="accordion-body" style={{ "width": "100%" }}>
                        <table className="table table-striped">
                            <tbody>
                                {/* IMPLICIT RETURN: */}
                                {products.map((product, index) => <TableRow key={index} product={product} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export const TableRow = ({ product }) => {
    return (
        <tr>
            <td className="col-name">
                {product.name}
                <p className="description">{product.description}</p>
            </td>
            <td className="col-price">
                {product.price}
            </td>
        </tr>
    )
}


export const Footer = () => {
    return (
        <footer id="footer">
            <p id="footer-a">Desarrollado por el equipo de {<a href="https://gesprender.com/" target={"_blank"}>GesPrender.com</a>}.</p>
            <p id="footer-b">Obten el tuyo gratuito en {<a href="https://app.gesprender.com/" target={"_blank"}> APP GesPrender for Business</a>}.</p>

        </footer>
    )
}




// Rendering: Render <App /> in div with id modulo:
const module = document.querySelector('#modulo');
ReactDOM.render(<App />, module);