import React, { Component } from 'react';
import store from './store';
import Filter from './Filter.jsx';
import PickCardButton from './containers/PickCardButton';
import ToggleTechniquesTableButton from './containers/ToggleTechniquesTableButton';
import TechniquesTable from './containers/TechniquesTable';
import { SingleCard, TextCard, VideoCard } from './Card.jsx';
import logo from './logo.svg';
import './App.css';



class App extends Component {
    componentWillMount() {
        this.pickCard();
    }

    pickCard() {
        const filteredTechniques = store.techniquesWithVideo();

        if (filteredTechniques.length === 0) {
            this.setState({
                selectedTechnique: null,
                showSideA: true
            });
            store.setSelectedTechniqueName(null);
        } else {
            const maxId = filteredTechniques.length;
            const randomId = Math.floor(Math.random() * maxId);
            const randomTechnique = filteredTechniques[randomId];

            this.setState({
                selectedTechnique: randomTechnique,
                showSideA: true
            });
            store.setSelectedTechniqueName(randomTechnique.romaji);
        }
    }

    flipCard() {
        if (!this.state.hasError) {
            this.setState({
                showSideA: !this.state.showSideA
            });
        }
    }

    toggleTable() {
        store.toggleTable();
        this.setState({
            showTable: store.state.showTable
        });
    }

    render() {
        let card = null;

        if (store.state.showCards) {
            if (this.state.selectedTechnique === null) {
                card = <SingleCard
                        cardClass='card-primary card-inverse'
                        header='Hello!'
                    >
                    <span>
                        Welcome to the Suginoharyu technique trainer.<br/>
                        Above you can select what belt and technique types you want to practice on. Once you have made your selections, click &quot;Pick another card&quot; to select a random technique and try to guess what technique it is based on its name, then click the card to flip it and see if you were right!
                    </span>
                </SingleCard>
            } else if (!this.state.selectedTechnique.youtube) {
                card = <SingleCard
                        cardClass='card-danger card-inverse'
                        header='Sorry!'
                    >
                    <span>
                        There are no videos for the filters you selected.<br/>
                        Selected belt: { store.state.selectedBelt || 'All belts' }<br/>
                        Selected technique types: { store.state.selectedTechniqueTypes }
                    </span>
                </SingleCard>
            } else {
                if (this.state.showSideA) {
                    card = <TextCard
                        onClick={() => this.flipCard()}
                        belt={this.state.selectedTechnique.beltjudo}
                        technique={this.state.selectedTechnique}
                    />
                } else {
                    card = <VideoCard
                        onClick={() => this.flipCard()}
                        belt={this.state.selectedTechnique.beltjudo}
                        technique={this.state.selectedTechnique}
                    />
                }
            }
        }

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
                            setSelectedTechniqueType={store.setSelectedTechniqueName}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <PickCardButton />

                        {card}
                    </div>
                    <div className="col-lg-6">
                        <ToggleTechniquesTableButton />

                        <TechniquesTable />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
