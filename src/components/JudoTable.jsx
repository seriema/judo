import React from 'react';

const JudoTable = ({ selectedSort, selectedTechniqueName, setSort, techniques }) => {
    const body = techniques.map((technique) => {
        const video = technique.youtube ? <a href={technique.youtube} target='_blank'>{technique.romaji}</a> : <span>{technique.romaji}</span>;

        return (
            <tr className={ technique.romaji === selectedTechniqueName ? "table-active" : "" } key={technique.romaji}>
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
                    <th onClick={() => setSort("romaji")} className={ selectedSort === "romaji" ? "font-italic" : "" }>Name</th>
                    <th onClick={() => setSort("technique")} className={ selectedSort === "technique" ? "font-italic" : "" }>Technique</th>
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

export default JudoTable;
