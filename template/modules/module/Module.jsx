// Import custom methods
import { API } from "../../globals/CustomHooks";
import { ButtonOffcanvasEnd, OfcanvasEnd } from "../../globals/CustomComponents";

// React dependecies
const { useState, useEffect, createContext, useContext, useRef } = React;

const App = () => {

    return (
        <div>
            <FirstComponent />
            <ButtonOffcanvasEnd  id='addExpense' title='Agregar nuevo gastos' button='Nuevo gasto personal' body={FirstComponent} callback={''} />
        </div>
    )
}

const FirstComponent = () => {
    return (
        <h2>React CDN </h2>
    );
}


// Rendering
const module = document.querySelector('#modulo');
ReactDOM.render(<App />, module);