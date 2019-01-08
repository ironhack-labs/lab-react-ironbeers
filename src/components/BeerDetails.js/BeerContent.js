import React from 'react';

const BeerContent = ({img, name, level, tag, brewed, info, author}) => (
  <div className="beer-content">
    <img src={img} alt={name} />
    <table className="headers">
      <tbody>
        <tr>
          <th>{name}</th>
          <td className="level">{level}</td>
        </tr>
        <tr>
          <td className="tag">{tag}</td>
          <td className="date"><b>{brewed}</b></td>
        </tr>
      </tbody>
    </table>
    <p>{info}</p>
    <span><b>{author}</b></span>
  </div>
);

export default BeerContent;