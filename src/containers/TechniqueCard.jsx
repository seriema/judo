import React from 'react'
import { connect } from 'react-redux';
import { toggleShowAnswer } from '../store/actions';
import { SingleCard, TextCard, VideoCard } from '../components/Card';
import HideableComponent from '../components/HideableComponent';

const TechniqueCardComponent = ({ technique, belt, techniqueTypes, show, sideA, onClick }) =>
{
    if (!show)
        return null;

    if (technique === null) {
        return <SingleCard
            cardClass='card-primary card-inverse'
            header='Hello!'
        >
            <span>
                Welcome to the Suginoharyu technique trainer.<br/>
                Above you can select what belt and technique types you want to practice on. Once you have made your selections, click &quot;Pick another card&quot; to select a random technique and try to guess what technique it is based on its name, then click the card to flip it and see if you were right!
            </span>
        </SingleCard>
    } else if (!technique.youtube) {
        return <SingleCard
            cardClass='card-danger card-inverse'
            header='Sorry!'
        >
            <span>
                There are no videos for the filters you selected.<br/>
                Selected belt: { belt || 'All belts' }<br/>
                Selected technique types: { techniqueTypes }
            </span>
        </SingleCard>
    } else {
        if (sideA) {
            return <TextCard
                onClick={() => onClick()}
                belt={technique.beltjudo}
                technique={technique}
            />
        } else {
            return <VideoCard
                onClick={() => onClick()}
                belt={technique.beltjudo}
                technique={technique}
            />
        }
    }
}

const mapStateToProps = (state/*, ownProps*/) => {
    let selectedTechnique = state.selected.techniques.filter(t => t.romaji === state.selected.techniqueName)[0]; // FIXME
    // TODO: What if there's no technique?..
    return {
        technique: selectedTechnique,
        belt: state.selected.belt,
        techniqueTypes: null, // TODO: Move technique types to the store
        show: state.show.card,
        sideA: !state.show.answer
    }
};

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
    return {
        onClick: () => {
            dispatch(toggleShowAnswer());
        }
    };
};

const TechniqueCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(HideableComponent(TechniqueCardComponent));

export default TechniqueCard;
