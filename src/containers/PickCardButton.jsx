import { connect } from 'react-redux';
import { setRandomTechnique } from '../store/actions';
import Button from '../components/Button';

const mapStateToProps = (/*state, ownProps*/) => {
    return {
        text: "Pick another card"
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onClick: () => dispatch(setRandomTechnique())
    };
};

const PickCardButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default PickCardButton
