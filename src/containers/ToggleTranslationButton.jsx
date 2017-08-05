import { connect } from 'react-redux';
import ButtonLink from '../components/ButtonLink';
import { toggleTranslation } from '../store/actions';

const mapStateToProps = (state/*, ownProps*/) => {
    const textA = 'Hide hint';
    const textB = 'Show hint';

    return {
        text: state.show.translation ? textA : textB
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onClick: () => dispatch(toggleTranslation())
    };
};

const ToggleTranslationButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonLink);

export default ToggleTranslationButton;
