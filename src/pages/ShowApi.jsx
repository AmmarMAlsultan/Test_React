import React from 'react';

const ShowApi = (props) => {
    return (
        <div>
            <p style={{color:"#fdf", marginLeft:"10px"}}><span style={{color:"#fff"}}>Name : </span>{props.name}</p>
        </div>
    );
}

export default ShowApi;
