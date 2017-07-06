import React, { Component } from 'react';
import './Card.css';

function youtubeEmbedUrl(youtubeUrl) {
    const vidQuery = youtubeUrl.indexOf("v=") + 2;
    const ampersand = youtubeUrl.indexOf("&", vidQuery);
    const videoId = youtubeUrl.substring(vidQuery, ampersand);

    return "https://www.youtube.com/embed/" + videoId + "?ecver=2";
}

function SingleCard(props) {
    const classes = 'c-judo-card card ' + props.cardClass;
    let clickHandler = props.onClick ? props.onClick : function(){};
    return (
        <div className={classes} onClick={() => clickHandler()}>
            <div className='card-block'>
                <h3 className='card-title'>{props.header}</h3>
                <p className='card-title'><em>{props.title}</em></p>
                {props.children}
            </div>
        </div>
    );
}

function CardText(props) {
    return (
        <p className='card-text'>
            {props.children}
        </p>
    )
}

function TextCard(props) {
    const classes = 'side-a ' + props.belt.toLowerCase();
    let clickHandler = props.onClick ? props.onClick : function(){};
    // TODO: Make title (translation) optional
    return (
        <SingleCard
            cardClass={classes}
            onClick={() => clickHandler()}
            header={props.technique.romaji}
            title={
                <span>Swedish translation: {props.technique.swedish}</span>
            }
        >
            <CardText>
                Belt: {props.belt}<br/>
                Technique type: {props.technique.technique}<br/>
                <small className='card-text'>Tap the card to see the answer</small>
            </CardText>
        </SingleCard>
    );
}

function VideoCard(props) {
    const classes = 'side-b ' + props.belt.toLowerCase();
    let clickHandler = props.onClick ? props.onClick : function(){};
    const youtubeUrl = youtubeEmbedUrl(props.technique.youtube);

    return (
        <SingleCard
            cardClass={classes}
            onClick={() => clickHandler()}
            header={props.technique.romaji}
        >
            <div className='video'>
                <iframe src={youtubeUrl} width='640' height='360' frameBorder='0' style={{position:'absolute',width:'100%',height:'100%',left:0}} allowFullScreen></iframe>
            </div>
            <small className='card-text'>Tap the card to hide the answer</small>
        </SingleCard>
    );
}

export { SingleCard, TextCard, VideoCard };
