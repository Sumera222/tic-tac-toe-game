import React from "react";

const style ={
    background:'olive',
    border: '2px solid white',
    fontSize :'30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none' ,
    color: "white"
};

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>

);


export default Square;