import { connect } from 'react-redux';
import { toggleTable } from '../store/actions';
import ButtonLink from '../components/ButtonLink';

const mapStateToProps = (state/*, ownProps*/) => {
    const textA="Hide techniques";
    const textB="Show all filtered techniques";

    return {
        text: state.show.table ? textA : textB
    }
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onClick: () => {
            dispatch(toggleTable())
        }
    };
};

const ToggleTechniquesTableButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonLink);

export default ToggleTechniquesTableButton
