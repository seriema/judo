import { connect } from 'react-redux';
import { setSort } from '../store/actions';
import JudoTable from '../components/JudoTable';
import HideableComponent from '../components/HideableComponent';

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        selectedSort: state.selected.sort,
        selectedTechniqueName: state.selected.techniqueName.toLowerCase(),
        techniques: state.selected.techniques,
        show: state.show.table
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        setSort: filter => {
            dispatch(setSort(filter));
        }
    };
};

const TechniquesTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(HideableComponent(JudoTable));

export default TechniquesTable
