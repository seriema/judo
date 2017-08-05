import { connect } from 'react-redux';
import { setSort } from '../store/actions';
import JudoTable from '../components/JudoTable';
import HideableComponent from '../components/HideableComponent';
import { dataFriendly, filterTechniques } from '../helpers';

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        selectedSort: state.selected.sort,
        selectedTechniqueName: dataFriendly(state.selected.techniqueName),
        techniques: filterTechniques(state),
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
