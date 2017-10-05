import { connect } from 'react-redux';
import { setNextTechnique } from '../store/actions';
import Button from '../components/Button';

const mapStateToProps = (/*state, ownProps*/) => {
    return {
        text: 'Next technique',
        type: 'primary'
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onClick: () => dispatch(setNextTechnique())
    };
};

const PickCardButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default PickCardButton
