import React from 'react';
import PropTypes from 'prop-types';
import { techniqueType, sortType } from '../helpers';

const JudoTable = ({ selectedSort, selectedTechniqueName, techniques, setSort, setTechnique }) => {
    const body = techniques.map((technique) => {
        const video = technique.youtube ? <a href={technique.youtube} target='_blank'>{technique.romaji}</a> : <span>{technique.romaji}</span>;

        const activeClass = technique.romaji === selectedTechniqueName ? "table-active" : "";
        return (
            <tr className={activeClass} key={technique.romaji} onClick={() => setTechnique(technique)}>
                <td>
                    {video}
                </td>
                <td>{technique.category}</td>
                <td>{technique.beltjudo}</td>
            </tr>
        );
    });

    return (
        <div className='c-judo-table'>
            <p>Click on the headers to sort, or click on a line to select the technique.</p>
            <table className='table'>
                <thead className='thead-inverse'>
                <tr>
                    <th onClick={() => setSort("romaji")} className={ selectedSort === "romaji" ? "font-italic" : "" }>Name</th>
                    <th onClick={() => setSort("category")} className={ selectedSort === "category" ? "font-italic" : "" }>Technique</th>
                    <th onClick={() => setSort("beltjudo")} className={ selectedSort === "beltjudo" ? "font-italic" : "" }>Belt</th>
                </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    );
};

JudoTable.propTypes = {
    // Required
    selectedSort: sortType.isRequired,
    selectedTechniqueName: PropTypes.string.isRequired,
    techniques: PropTypes.arrayOf(techniqueType).isRequired,
    setSort: PropTypes.func.isRequired,
    setTechnique: PropTypes.func.isRequired
};

export default JudoTable;
