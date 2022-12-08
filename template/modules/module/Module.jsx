// Import custom methods
import { API } from "../../globals/CustomHooks";

// React dependecies
const { useState, useEffect, createContext, useContext, useRef } = React;

// Site to Clone: https://precios.gesprender.com/burgerlast

const App = () => {

    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        API._get("https://api.gesprender.com/products/burgerlast")
            .then((res) => {
                setCategories(res.categorys)
                setBusiness(res.business)
                setProducts(res.products)
            })
        // .then(() => {
        //     console.log("NAVBAR", categories)
        //     console.log("BUSINESS", business)
        // })
    }, [])

    return (
        <div id='body'>
            <Header business={business} />
            <Navbar categories={categories} />
            <Content categories={categories} products={products} />
            <Footer />

        </div>
    )
}

const Header = ({ business }) => {

    const { address, logo, whatsapp, instagram } = business;    // would like to use "logo"
    const businessName = business.business;
    const logoUrl = {
        background: `url('${logo}') center center / cover`,
    }

    // console.log("HEADER", business)

    return (
        <header>
            <div id="logo-container" style={logoUrl}></div> {/* nesting img tag does not get desired style: <img id="logo" src={logo} alt="logo" /> */}

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

    // const Loading = () => categories.length === 0 ? <p>Loading...</p> : categories.map((category, index) => {
    //     return <a key={index} href={`#ancla_${category}`}>{category}</a>
    // })

    return (
        <nav className="navbar sticky-top navbar-dark bg-dark mb-2 text-light flex-center">

            {
                // <Loading />
                categories.map((category, index) => {
                    return <a key={index} href={`#ancla_${category}`}>{category}</a>
                })
            }
        </nav>
    )
}

export const Content = ({ categories, products }) => {
    console.log("PRODUCTOS", products)


    /* const productsArray = [
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
    ] */

    return (
        <div className="content">

            {
                categories.map((category, index) => {
                    return <Accordion key={index} category={category} products={products} />
                })
            }

        </div>
    )
}

export const Accordion = ({ category, products }) => {

    const productsPerCategory = products[category]

    console.log("PRODUCTOS POR CATEG", productsPerCategory)

    const Loader = () => !productsPerCategory ? null : productsPerCategory.map((product, index) => {
        return <TableRow key={index} product={product} />
    })

    return (
        <div className="accordion" id={`_${category}`} >
            <div id={`ancla_${category}`}></div>
            <div className="accordion-item m-2">
                <h2 className="accordion-header" id={`__${category}`}>
                    {
                        /* Button properties:
                        1) data-bs-target is the id of the content which is toggled
                        2) aria-expanded="true" is to set the accordion default to expanded
                        3) aria-controls it's what is going to control (the same of the id of target)
                        */
                    }
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${category}`} aria-expanded="true" aria-controls={`${category}`} style={{ "width": "100%", "height": "70px", "fontSize": "21px", "fontWeight": "400" }}>
                        {category}
                    </button>
                </h2>
                {
                    /* Div content properties:
                        1) id has to be the same of the button target
                        2) classname with "show" showing the content by default (expanded)
                        3) aria-labelledby the id of the heading of this content
                        4) data-bs-parent says which accordion is the parent of this content
                    */
                }
                <div id={`${category}`} className="accordion-collapse collapse show" aria-labelledby={`__${category}`} data-bs-parent={`#_${category}`}>
                    <div className="accordion-body" style={{ "width": "100%" }}>
                        <table className="table table-striped">
                            <tbody>
                                <Loader />
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
                {product.product}
                <p className="description">{product.description}</p>
            </td>
            <td className="col-price">
                {`$${product.price_sale}`}
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