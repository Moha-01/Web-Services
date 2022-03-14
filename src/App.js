import logo from './logo.png';
import './App.css';
import React, { Component } from 'react';
import Cryptocurrencies from './components/cryptocurrencies';

class App extends Component {

    state = {
        cryptocurrencies: []
    }

    render() {
        return (
            <Cryptocurrencies cryptocurrencies={this.state.cryptocurrencies} />
        )
    }

    componentDidMount() {
        fetch("https://api.nomics.com/v1/currencies/ticker?key=8103c0cb46854cc1bcb2999deba1b2cf7c2bb9ce&interval=1d,30d&convert=EUR&per-page=100&page=1")
            .then(response => response.json())
            .then((data) => {
                this.setState({ cryptocurrencies: data })
            })
            .catch(console.log)
    }

}

export default App;
