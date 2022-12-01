
const { useState, useEffect, createContext, useRef } = React;

export function Test() {

    return (
        <h1>tests</h1>
    )
}

export function OfcanvasEnd(props) {
    const id = props.id;
    const title = props.title;
    const BodyOffcanvas = props.body;

    return (
        <div className="offcanvas offcanvas-end" id={id} aria-labelledby={id + "Label"}>
            <div className="offcanvas-header">
                <h5 id={id + "Label"}>{title}</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <BodyOffcanvas />
            </div>
        </div>
    );
}
export function ButtonOffcanvasEnd(props) {
    const id = props.id;
    const title = props.title;
    const BodyOffcanvas = props.body;
    const button = props.button;
    const callback = props.callback;
    return (
        <div className='ExpensesButtons'>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target={'#' + id} aria-controls={id}>
                <img src="https://gesprender.com/app/template/assets/img/icons/mas.svg" width="20px" /> {button}
            </button>
            <div className="offcanvas offcanvas-end" id={id} aria-labelledby={id + "Label"}>
                <div className="offcanvas-header">
                    <h5 id={id + "Label"}>{title}</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <BodyOffcanvas callback={callback} />
                </div>
            </div>
        </div>
    );
}