import '../css/header.css';
import React, { Component } from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
class Header extends Component {
    render() {
        return (
            <div>
                <Welcome name="World" />
                <Welcome name="morning" />
                <Welcome name="girl" />
            </div>
        );
    }
}

export default Header;
