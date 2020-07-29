import React from 'react'
import { Link } from 'react-router-dom'

function ButtonLink(props) {
    // props => { className: "o que alguém passar", href: "/" }
    return (
        <Link to={props.to} className={props.className}>
            {props.children}
        </Link>
    );
}

export default ButtonLink;