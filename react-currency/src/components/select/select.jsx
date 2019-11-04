import React from 'react';

function Select(props){
    return(
        <option value={props.id}>{props.name}</option>
    )
}

export default Select;