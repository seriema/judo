import React, { Component } from 'react';
import store from './store';
import Filter from './Filter.jsx';
import Card from './Card.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedTechnique: null
        };
    }

    pickCard() {
        // TODO: Always flip the card to side A when picking a new card.
        //this.showSideA = true;

        const filteredTechniques = store.techniques().filter(function (tech) {
            return !!tech.youtube;
        });

        if (filteredTechniques.length === 0) {
            store.setSelectedTechniqueName(null);
        } else {
            const maxId = filteredTechniques.length;
            const randomId = Math.floor(Math.random() * maxId);
            const randomTechnique = filteredTechniques[randomId];

            this.setState({selectedTechnique: randomTechnique});
            store.setSelectedTechniqueName(randomTechnique.romaji);
        }
    }

    render() {
        return (
            <div className="App container mt-4">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Suginoharyu</h2>
                </div>
                <p className="App-intro">
                    To get started, select your belt and techniques.
                </p>

                <div className="row">
                    <div className="col">
                        <Filter
                            belts={store.belts()}
                            selectedBelt={store.state.selectedBelt}
                            setSelectedBelt={store.setSelectedBelt}
                            techniqueNames={store.techniqueNames()}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <button onClick={() => this.pickCard()} className='btn btn-primary mb-2'>Pick another card</button>

                        if (store.state.showCards) {
                            <Card
                                selectedBelt={store.state.selectedBelt}
                                selectedTechniqueTypes={store.state.selectedTechniques}
                                selectedTechnique={this.state.selectedTechnique}
                            />
                        }
                    </div>
                    <div className="col-lg-6">
{/*
                        <button v-on:click='toggleTable' class='btn btn-link'>{{ showTable ? "Hide techniques" : "Show all filtered techniques" }}</button>

                        <judo-table v-if="showTable"></judo-table>
*/}
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
