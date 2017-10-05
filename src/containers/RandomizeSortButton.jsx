import { connect } from 'react-redux';
import { setSortToRandom } from '../store/actions';
import Button from '../components/Button';

const mapStateToProps = (/*state, ownProps*/) => {
    return {
        text: 'Randomize order',
        type: 'secondary'
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onClick: () => dispatch(setSortToRandom())
    };
};

const PickCardButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default PickCardButton
