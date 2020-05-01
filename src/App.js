import React, {Component} from 'react';

import './App.css';

import ReactGA from 'react-ga';

function initizeAnalytics() {
  ReactGA.initialize('UA-123684440-3');
  ReactGA.pageview('/');
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pTotal: null,
      contaminados: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      pTotal: event.target.value,
      contaminados: (event.target.value * 70) / 100,
    });
  }
  render() {
    initizeAnalytics();
    const {pTotal, contaminados} = this.state;
    return (
      <div id="wrapper">
        <div id="box">
          <h1>
            Probabilidade de contaminados e mortos pelo Covid-19 até o final da
            pandemia.
          </h1>
          <p>Informe a população do seu bairro, cidade, estado ou país.</p>
          <div id="pesquisar">
            <input
              type="number"
              placeholder="digite aqui..."
              onChange={this.handleChange}
              value={pTotal}
            />
          </div>
          <div id="resultado">
            <h2>
              Contaminados: <span>{Math.round(contaminados)}</span>
            </h2>
            <h2>
              Assintomáticos:{' '}
              <span>{Math.round((contaminados * 90) / 100)}</span>
            </h2>
            <h2>
              Terão sintomas:{' '}
              <span>{Math.round((contaminados * 10) / 100)}</span>
            </h2>
            <h2>
              Sintomas leves (tratados em casa):{' '}
              <span>{Math.round((contaminados * 8.5) / 100)}</span>
            </h2>
            <h2>
              Sintomas graves (Hospital):{' '}
              <span>{Math.round((contaminados * 1.5) / 100)}</span>
            </h2>
            <h2>
              Mortos: <span>{Math.round((contaminados * 0.2) / 100)}</span>
            </h2>
          </div>
          <div id="link">
            <a href="https://www.youtube.com/watch?v=NCqnQA_X-bo">
              Entenda os números
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
