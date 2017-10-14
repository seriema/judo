import React from 'react';
import PropTypes from 'prop-types';
import { beltType, techniqueType } from '../helpers';
import './Card.css';

function youtubeEmbedUrl(youtubeUrl) {
    const vidQuery = youtubeUrl.indexOf("v=") + 2;
    const ampersand = youtubeUrl.indexOf("&", vidQuery);
    const videoId = youtubeUrl.substring(vidQuery, ampersand);

    return "https://www.youtube.com/embed/" + videoId + "?ecver=2";
}

const SingleCard = ({ cardClass, onClick, header, title, children }) => {
    const classes = 'c-judo-card card ' + cardClass;
    let clickHandler = onClick ? onClick : function(){};
    return (
        <div className={classes} onClick={() => clickHandler()}>
            <div className='card-block'>
                <h3 className='card-title'>{header}</h3>
                <p className='card-title'><em>{title}</em></p>
                {children}
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    // Required
    onClick: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,

    // Optional
    cardClass: PropTypes.string, // TODO: actually it's some CSS classes like: "card-danger card-inverse"
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};

const CardText = ({ children }) => {
    return (
        <p className='card-text'>
            {children}
        </p>
    )
};

const TextCard = ({ belt, onClick, technique, showTranslation }) => {
    const classes = 'side-a ' + belt.toLowerCase();
    let clickHandler = onClick ? onClick : function(){};
    return (
        <SingleCard
            cardClass={classes}
            onClick={() => clickHandler()}
            header={technique.romaji}
            title={
                showTranslation ? <span>Swedish translation: {technique.swedish}</span> : null
            }
        >
            <CardText>
                Belt: {belt}<br/>
                Technique type: {technique.category}<br/>
                <small className='card-text'>Tap the card to see the answer</small>
            </CardText>
        </SingleCard>
    );
};

TextCard.propTypes = {
    // Required
    belt: beltType.isRequired,
    technique: techniqueType.isRequired,
    showTranslation: PropTypes.bool.isRequired,

    // Optional
    onClick: PropTypes.func
};

const VideoCard = ({ belt, onClick, technique }) => {
    const classes = 'side-b ' + belt.toLowerCase();
    let clickHandler = onClick ? onClick : function(){};
    const youtubeUrl = youtubeEmbedUrl(technique.youtube);

    return (
        <SingleCard
            cardClass={classes}
            onClick={() => clickHandler()}
            header={technique.romaji}
        >
            <div className='video'>
                <iframe
                    src={youtubeUrl}
                    title='technique video'
                    width='640'
                    height='360'
                    frameBorder='0'
                    style={{position:'absolute',width:'100%',height:'100%',left:0}}
                    allowFullScreen />
            </div>
            <small className='card-text'>Tap the card to hide the answer</small>
        </SingleCard>
    );
};

VideoCard.propTypes = {
    // Required
    belt: beltType.isRequired,
    technique: techniqueType.isRequired,

    // Optional
    onClick: PropTypes.func
};

export { SingleCard, TextCard, VideoCard };
