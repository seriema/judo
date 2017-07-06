import React from 'react';

const BeltPicker = ({ belts, selectedBelt, setSelectedBelt }) => {
    const beltOptions = belts.map((belt) => {
        return (
            <option key={belt.value} value={belt.value}>{belt.label}</option>
        );
    });

    return (
        <div className='form-group'>
            <label className='sr-only' htmlFor='belt'>Belts</label>
            <select className='custom-select mr-2 mb-2' name='belt' defaultValue={selectedBelt} onChange={(event) => setSelectedBelt(event.target.value)}>
                {beltOptions}
            </select>
        </div>
    );
};

const TechniqueTypePicker = ({ techniqueNames, setSelectedTechniqueType }) => {
    const techniqueTypes = techniqueNames.map((t) => {
        return (
            // bind to selectedTechniques ?
            <label key={t} className='custom-control custom-checkbox mb-2 mr-2'>
                <input type='checkbox' id={t} value={t} className='custom-control-input' onChange={(event) => setSelectedTechniqueType(event.target.value)} />
                <span className='custom-control-indicator'/>
                <span htmlFor={t} className='custom-control-description'>{t}</span>
            </label>
        );
    });

    return (
        <div className='form-group'>
            {techniqueTypes}
        </div>
    );
};



const Filter = ({ belts, selectedBelt, setSelectedBelt, setSelectedTechniqueType, techniqueNames }) => {
    return (
        <div className='c-judo-filter'>
            <form className='form-inline'>
                <BeltPicker
                    belts={belts}
                    selectedBelt={selectedBelt}
                    setSelectedBelt={setSelectedBelt}
                />

                <TechniqueTypePicker
                    techniqueNames={techniqueNames}
                    setSelectedTechniqueType={setSelectedTechniqueType}
                />
            </form>
        </div>
    );
};

export default Filter;
