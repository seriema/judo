import { connect } from 'react-redux';
import CheckboxGroup from '../components/CheckboxGroup';
import { toggleCategory } from '../store/actions';
import { unique } from '../helpers';

const techniqueNames = (techniques) => {
    const nonEmpty = techniques.filter(function (technique) {
        // Removes techniques with no technique-type name
        return !!technique.technique;
    });

    return unique(nonEmpty, "technique").sort();
};

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        labels: techniqueNames(state.techniques)
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onChange: category => dispatch(toggleCategory(category))
    };
};

const CategoryCheckboxes = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxGroup);

export default CategoryCheckboxes;
