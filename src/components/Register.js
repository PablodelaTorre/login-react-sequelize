import React, { Component } from 'react'
import axios from "axios"

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            algo: "algo"
        }
    }

    componentDidMount = () => {
        axios.get("/testApi").then( (res) => {
            this.setState({
                algo: res.data.respuestaJSON
            }
            )
        })
    }

    render() {
        return (
            <h1>Registrarse: {this.state.algo}</h1>
        )
    }
}
