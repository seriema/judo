import React, { Component } from 'react';
import { setRandomTechnique } from './store/actions';
import BeltDropdown from './containers/BeltDropdown';
import CategoryCheckboxes from './containers/CategoryCheckboxes';
import PickCardButton from './containers/PickCardButton';
import ToggleTechniquesTableButton from './containers/ToggleTechniquesTableButton';
import TechniquesTable from './containers/TechniquesTable';
import TechniqueCard from './containers/TechniqueCard';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    componentWillMount() {
        this.pickCard();
    }

    pickCard() {
        window.store.dispatch(setRandomTechnique());
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
                        <form className='form-inline'>
                            <BeltDropdown />

                            <CategoryCheckboxes />
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <PickCardButton />

                        <TechniqueCard />
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
