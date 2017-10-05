import { connect } from 'react-redux';
import { setSort, setTechniqueName } from '../store/actions';
import JudoTable from '../components/JudoTable';
import HideableComponent from '../components/HideableComponent';

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        selectedSort: state.selected.sort,
        selectedTechniqueName: state.techniques.currentName,
        techniques: state.techniques.filteredItems,
        show: state.show.table
    };
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        setSort: filter => {
            dispatch(setSort(filter));
        },
        setTechnique: technique => {
            dispatch(setTechniqueName(technique.romaji))
        }
    };
};

const TechniquesTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(HideableComponent(JudoTable));

export default TechniquesTable
