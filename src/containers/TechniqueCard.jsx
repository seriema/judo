import React from 'react'
import { connect } from 'react-redux';
import { toggleShowAnswer } from '../store/actions';
import { SingleCard, TextCard, VideoCard } from '../components/Card';
import HideableComponent from '../components/HideableComponent';
import './TechniqueCard.css';

const TechniqueCardComponent = ({ technique, belt, categories, show, showTranslation, sideA, onClick }) => {
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
    } else if (!technique) {
        return <SingleCard
            cardClass='card-danger card-inverse'
            header='Sorry!'
        >
            <span>
                There are no { categories ? categories.join(' or ') : null } techniques for { belt || 'all' } belts.
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
                Selected technique types: { categories }
            </span>
        </SingleCard>
    } else {
        return (
            <div className={`c-technique-card ${sideA ? '' : 'tapped'}`} onClick={() => onClick()}>
                <div className="flipper">
                    <div className="front">
                        <TextCard
                            belt={technique.beltjudo}
                            technique={technique}
                            showTranslation={showTranslation}
                        />
                    </div>
                    <div className="back">
                        <VideoCard
                            belt={technique.beltjudo}
                            technique={technique}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state/*, ownProps*/) => {
    let selectedTechnique = state.techniques.filteredItems[state.techniques.currentIndex];
    // TODO: This is pretty ugly. I should normalize the belts somehow, maybe just use the kyu level?
    selectedTechnique = {
        ...selectedTechnique,
        beltjudo: selectedTechnique.beltjudo.toLowerCase()
    };
    return {
        technique: selectedTechnique,
        belt: state.selected.belt,
        categories: state.selected.categories,
        show: state.show.card,
        showTranslation: state.show.translation,
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
