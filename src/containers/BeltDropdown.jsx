import { connect } from 'react-redux';
import Dropdown from '../components/Dropdown';
import { setBelt } from '../store/actions';
import { unique } from '../helpers';

function stringsToOptions(strings) {
    const dataFriendly = string => {
        // Turns strings like "All belts" into "allbelts". Useful for HTML values and string comparisons.
        return !string ? '' : string.trim().toLowerCase().replace(' ', '');
    };

    return strings
        .filter(function (belt) {
            return !!belt;
        })
        .sort()
        .map(function (belt) {
            return {
                value: dataFriendly(belt),
                label: belt
            };
        });
}

const mapStateToProps = (state/*, ownProps*/) => {
    // If there are techniques with no belt in judo they will get filtered out. (In the future I want to show the jujutsu techniques as well.
    let judoBelts = unique(state.techniques, 'beltjudo');
    let beltOptions = stringsToOptions(judoBelts);

    // Add an "select all" option as the first option
    beltOptions.unshift({
        value: '',
        label: 'All belts'
    });

    return {
        options: beltOptions,
        defaultValue: state.selected.belt
    }
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onChange: belt => dispatch(setBelt(belt))
    };
};

const BeltDropdown = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dropdown);

export default BeltDropdown;
