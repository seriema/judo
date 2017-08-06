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
        <div className="App container mt-4">
            <div className="App-header">
                <h2>Suginoharyu</h2>
            </div>

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
    );
};

export default App;
