import { connect } from 'react-redux';
import CheckboxGroup from '../components/CheckboxGroup';
import { setRandomTechnique, toggleCategory } from '../store/actions';
import { unique, withProperty } from '../helpers';

const techniqueNames = (techniques) => {
    const filtered = techniques.filter(withProperty('category'));
    return unique(filtered, 'category').sort();
};

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        defaultLabels: state.selected.categories,
        labels: techniqueNames(state.techniques)
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onChange: category => {
            dispatch(toggleCategory(category));
            dispatch(setRandomTechnique());
        }
    };
};

const CategoryCheckboxes = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxGroup);

export default CategoryCheckboxes;
