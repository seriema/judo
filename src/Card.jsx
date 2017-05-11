import React, { Component } from 'react';
import './Card.css';

function youtubeEmbedUrl(youtubeUrl) {
    var vidQuery = youtubeUrl.indexOf("v=") + 2;
    var ampersand = youtubeUrl.indexOf("&", vidQuery);
    var videoId = youtubeUrl.substring(vidQuery, ampersand);

    return "https://www.youtube.com/embed/" + videoId + "?ecver=2";
}

function SingleCard(props) {
    const classes = 'card ' + props.cardClass;
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
            onClick={() => props.onClick()}
            header={props.technique.romaji}
            title={
                <span>Swedish translation: {props.technique.swedish}</span>
            }
        >
            <CardText>
                Belt: {props.technique.beltjudo}<br/>
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
            onClick={() => props.onClick()}
            header={props.technique.romaji}
        >
            <div className='video'>
                <iframe src={youtubeUrl} width='640' height='360' frameBorder='0' style={{position:'absolute',width:'100%',height:'100%',left:0}} allowFullScreen></iframe>
            </div>
            <small className='card-text'>Tap the card to hide the answer</small>
        </SingleCard>
    );
}

class Card extends Component {
    constructor() {
        super();
        this.state = {
            showSideA: true,
            hasError: false
        };
    }

    handleClick() {
        if (!this.state.hasError) {
            this.state.showSideA = !this.state.showSideA;
        }
    }

    render() {
        let card = null;
        if (!this.props.selectedTechnique) {
            card = <SingleCard
                cardClass='card-danger card-inverse'
                header='Sorry!'
            >
                <span>
                    There are no videos for the filters you selected.<br/>
                    Selected belt: { this.props.selectedBelt || 'All belts' }<br/>
                    Selected technique types: { this.props.selectedTechniqueTypes }
                </span>
            </SingleCard>
        } else {
            if (this.state.showSideA) {
                card = <TextCard
                    onClick={() => this.handleClick()}
                    belt={this.props.selectedBelt}
                    technique={this.props.selectedTechnique}
                />
            } else {
                card = <VideoCard
                    onClick={() => this.handleClick()}
                    belt={this.props.selectedBelt}
                    technique={this.props.selectedTechnique}
                />
            }
        }

        return (
            <div className="c-judo-card">
                {card}
            </div>
        );
    }
}

export default Card;
