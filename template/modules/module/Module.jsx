// Import custom methods
import { API } from "../../globals/CustomHooks";
import { ButtonOffcanvasEnd, OfcanvasEnd } from "../../globals/CustomComponents";

// React dependecies
const { useState, useEffect, createContext, useContext, useRef } = React;

const App = () => {

    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);

    useEffect(() => {


        API._get("https://api.gesprender.com/products/burgerlast")
            .then((res) => {
                setCategories(res.categorys)
                setBusiness(res.business)
            })
            .then(() => {
                console.log("NAVBAR", categories)
                console.log("BUSINESS", business)
            })

    }, [])

    return (
        <div id='body'>
            <Header business={business} />
            <Navbar categories={categories} />
            <Content categories={categories} />
            <Footer />

        </div>
    )
}

const Header = ({ business = {} }) => {

    const { address, logo, whatsapp, instagram } = business;
    const businessName = business.business;

    console.log("HEADER", business)
    return (
        <header>
            <div id="logo-container"></div> {/* nesting img tag does not get desired style: <img id="logo" src={logo} alt="logo" /> */}

            <div>
                <div>{businessName}</div>
                <div>{address}</div>
                <div id="socials">
                    <a href={`https://wa.me/${whatsapp}`} target="_blank"><img src="https://precios.gesprender.com/assets/wsp.png" alt="whatsapp" /></a>
                    <a href={`https://instagram.com/${instagram}`} target="_blank"><img src="https://precios.gesprender.com/assets/instagram.png" alt="instagram" /></a>
                </div>
            </div>
        </header>
    );
}

export const Navbar = ({ categories }) => {

    const Loading = () => categories.length === 0 ? <p>Loading...</p> : categories.map((category, index) => {
        return <a key={index} href={`#ancla_${category}`}>{category}</a>
    })

    return (
        <nav className="navbar sticky-top navbar-dark bg-dark mb-2 text-light">

            <Loading />

        </nav>
    )
}

export const Content = ({ categories }) => {

    const productsArray1 = [
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
        {
            name: "burger3",
            price: "$300",
            description: "Pan especial + Burguer + Chedar"
        },
        {
            name: "burger3",
            price: "$300",
            description: "Pan especial + Burguer + Chedar"
        },
        {
            name: "burger3",
            price: "$300",
            description: "Pan especial + Burguer + Chedar"
        },
        {
            name: "burger3",
            price: "$300",
            description: "Pan especial + Burguer + Chedar"
        },
        {
            name: "burger3",
            price: "$300",
            description: "Pan especial + Burguer + Chedar"
        },
        {
            name: "burger3",
            price: "$300",
            description: "Pan especial + Burguer + Chedar"
        },
    ]

    const [products, setProducts] = useState({});
    // const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState({});

    useEffect(() => {

        const productsArray = []

        API._get("https://api.gesprender.com/products/burgerlast")
            .then(res => {
                console.log("RES------", res)
                //   setCategories(res.categorys)
                //  console.log("CATEGORIES--------", categories)

                for (let prop in res.products) {
                    productsArray.push({ [prop]: res.products[prop] })
                }
                console.log("PRODUCTS_ARRAY", productsArray)
                setProducts(productsArray)
                setBusiness(res.business)
            })
            .then(() => {
                console.log("PRODUCTS------", products)
            })
            .then(() => {
                console.log("BUSINESS------", business)
            })

    }, [])



    return (
        <div className="content">

            <Accordion category={"🍔Burgers"} products={productsArray1} />

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
                                {
                                    products.map((product, index) => {
                                        return <TableRow key={index} product={product} />
                                    })
                                }
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