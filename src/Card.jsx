import React, { Component } from 'react';
import './Card.css';

function SingleCard(props) {
    const classes = 'card ' + props.cardClass;
    let clickHandler = props.onClick ? props.onClick : function(){};
    return (
        <div className={classes} onClick={() => clickHandler()}>
            <div className='card-block'>
                <h3 className='card-title'>{props.header}</h3>
                <p className='card-title'><em>{props.title}</em></p>
                <p className='card-text'>
                    {props.content}
                </p>
            </div>
        </div>
    );
}

function JudoCard(props) {
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
            content={
                <span>
                    Belt: {props.technique.beltjudo}<br/>
                    Technique type: {props.technique.technique}<br/>
                    <small className='card-text'>Tap the card to see the answer</small>
                </span>
            }
        />
    );
}

function VideoCard(props) {
{/*    <div v-on:click='flipCard' class='card side-b'> \
        <div class='card-block'> \
            <h3 class='card-title'>{{ card.romaji }}</h3> \
            <div class='video'> \
                <iframe v-bind:src='youtubeEmbedUrl' width='640' height='360' frameborder='0' style='position:absolute;width:100%;height:100%;left:0' allowfullscreen></iframe> \
            </div> \
            <small class='card-text'>Tap the card to hide the answer</small> \
        </div> \
    </div> \*/}
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
            this.showSideA = !this.showSideA;
        }
    }

    render() {
        let card = null;
        if (!this.props.selectedTechnique) {
            card = <SingleCard
                cardClass='card-danger card-inverse'
                header='Sorry!'
                content={
                    <span>
                        There are no videos for the filters you selected.<br/>
                        Selected belt: { this.props.selectedBelt || 'All belts' }<br/>
                        Selected technique types: { this.props.selectedTechniqueTypes }
                    </span>
                }
            />
        } else {
            card = <JudoCard
                onClick={() => this.handleClick()}
                belt={this.props.selectedBelt}
                technique={this.props.selectedTechnique}
            />
        }


        return (
            <div className="c-judo-card">
                {card}
            </div>
        );
    }
}

export default Card;
