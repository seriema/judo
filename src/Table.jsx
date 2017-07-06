import React, { Component } from 'react';

export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            selectedSort: ""
        };
    }

    componentWillMount() {
        this.setSort(this.props.selectedSort);
    }

    setSort(sortName) {
        this.setState({
            selectedSort: sortName // just here to force an update
        });

        this.props.setSort(sortName);
    }

    render() {
        const body = this.props.techniques.map((technique) => {
            const video = technique.youtube ? <a href={technique.youtube} target='_blank'>{technique.romaji}</a> : <span>{technique.romaji}</span>;

            return (
                <tr className={ technique.romaji === this.props.selectedTechniqueName ? "table-active" : "" } key={technique.romaji}>
                    <td>
                        {video}
                    </td>
                    <td>{technique.technique}</td>
                    <td>{technique.beltjudo}</td>
                </tr>
            );
        });

        return (
            <div className='c-judo-table'>
                <table className='table'>
                    <thead className='thead-inverse'>
                    <tr>
                        <th onClick={() => this.setSort("romaji")} className={ this.state.selectedSort === "romaji" ? "font-italic" : "" }>Name</th>
                        <th onClick={() => this.setSort("technique")} className={ this.state.selectedSort === "technique" ? "font-italic" : "" }>Technique</th>
                        <th onClick={() => this.setSort("belt")} className={ this.state.selectedSort === "belt" ? "font-italic" : "" }>Belt</th>
                    </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        );
    }
}
