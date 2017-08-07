import React from 'react';
import BeltDropdown from './containers/BeltDropdown';
import CategoryCheckboxes from './containers/CategoryCheckboxes';
import PickCardButton from './containers/PickCardButton';
import Settings from './containers/Settings';
import ToggleTechniquesTableButton from './containers/ToggleTechniquesTableButton';
import TechniquesTable from './containers/TechniquesTable';
import TechniqueCard from './containers/TechniqueCard';
import HintCheckboxes from './containers/HintCheckboxes';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <h2>Suginoharyu</h2>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <Settings>
                            <p>Select the belt and techniques you want to study for.</p>
                            <BeltDropdown />
                            <CategoryCheckboxes />
                            <HintCheckboxes />
                        </Settings>
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

            <footer className="App-footer text-muted">
                <div className="container">
                    <p>Hacked together with love by <a href="http://johansson.jp" target="_blank" rel="noopener noreferrer">John-Philip "JP" Johansson</a>. The source code is available on <a href="https://github.com/seriema/judo" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                    <p>These techniques follow the belt ranking of <a href="http://www.suginoharyu.com/">Suginoharyu</a>. These will most likely not match your dojo if you train somewhere else.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
