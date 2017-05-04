import React, { Component } from 'react';

function BeltPicker(props) {
    const beltOptions = props.belts.map((belt) => {
        return (
            <option key={belt.value} value={belt.value}>{belt.label}</option>
        );
    });

    return (
        <div className='form-group'>
            <label className='sr-only' htmlFor='belt'>Belts</label>
            <select className='custom-select mr-2 mb-2' name='belt' defaultValue={props.selectedBelt} onChange={(event) => props.setSelectedBelt(event.target.value)}>
                {beltOptions}
            </select>
        </div>
    );
}

function TechniqueTypePicker(props) {
    const techniqueTypes = props.techniqueNames.map((t) => {
        return (
            // bind to selectedTechniques ?
            <label key={t} className='custom-control custom-checkbox mb-2 mr-2'>
                <input type='checkbox' id={t} value={t} className='custom-control-input' />
                <span className='custom-control-indicator'></span>
                <span htmlFor={t} className='custom-control-description'>{t}</span>
            </label>
        );
    });

    return (
        <div className='form-group'>
            {techniqueTypes}
        </div>
    );
}

class Filter extends Component {
    render() {
        return (
            <div className='c-judo-filter'>
                <form className='form-inline'>
                    <BeltPicker
                        belts={this.props.belts}
                        selectedBelt={this.props.selectedBelt}
                        setSelectedBelt={this.props.setSelectedBelt}
                    />

                    <TechniqueTypePicker
                        techniqueNames={this.props.techniqueNames}
                    />
                </form>
            </div>
        );
    }
}

export default Filter;


/*

Vue.component("judo-filter", {
    data: function () {
        return {
            sharedState: window.store.state,
            selectedTechniques: window.store.state.selectedTechniques.slice() // Don't databind directly to the states, but we want this property here because checkboxes are handled a bit special by Vue so we don't want to reinvent all the logic of keeping an array matching what values are checked.
        };
    },

    computed: {
        belts() {
            return window.store.belts();
        },

        selectedBelt: {
            get: function () {
                return this.sharedState.selectedBelt;
            },
            set: function (newValue) {
                window.store.setSelectedBelt(newValue);
            }
        },

        techniqueNames() {
            return window.store.techniqueNames();
        }
    },

    methods: {
        flipView(event) {
            window.store.flipView(event);
        }
    },

    watch: {
        selectedTechniques(newValue, oldValue) {
            window.store.setSelectedTechniques(newValue);
        }
    }
});
*/
