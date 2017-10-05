import { connect } from 'react-redux';
import { toggleTranslation } from '../store/actions';
import CheckboxGroup from '../components/CheckboxGroup';
import { dataFriendly } from '../helpers';

const mapStateToProps = (state/*, ownProps*/) => {
    const label = 'Show Swedish translation';
    return {
        defaultLabels: state.show.translation ? [dataFriendly(label)] : [],
        labels: [label],
        groupLabel: 'Hints'
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onChange: () => dispatch(toggleTranslation())
    };
};

const HintCheckboxes = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxGroup);

export default HintCheckboxes;
