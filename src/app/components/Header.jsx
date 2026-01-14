import React, {Component} from "react";
import NavBar from "@/app/components/NavBar";
export default class Header extends Component {
    render(){
        return (
            // Lo que tenga la cabecera
            <header>
                <h1>Hello World! Soy Cabecera</h1>
                <NavBar />
            </header>
        );
    }
}