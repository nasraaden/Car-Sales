import React from 'react';

const AddedFeature = props => {
  console.log(props.removeFeatures);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeatures(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
