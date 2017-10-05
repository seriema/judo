import { connect } from 'react-redux';
import CheckboxGroup from '../components/CheckboxGroup';
import { toggleCategory } from '../store/actions';
import { unique, withProperty } from '../helpers';

const techniqueNames = (techniques) => {
    const filtered = techniques.filter(withProperty('category'));
    return unique(filtered, 'category').sort();
};

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        defaultLabels: state.selected.categories,
        labels: techniqueNames(state.techniques.allItems),
        groupLabel: 'Technique categories'
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onChange: category => {
            dispatch(toggleCategory(category));
        }
    };
};

const CategoryCheckboxes = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxGroup);

export default CategoryCheckboxes;
