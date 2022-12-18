import React from 'react';
import quote from './quotes.json'
import { useState } from 'react';
import './quote.css'

const QuoteBox = () => {
    
    const [index,setindex] = useState(Math.floor(Math.random()*quote.length))
    const [color,setcolor] = useState(Math.floor(Math.random()*16777215).toString(16))

    const change = () =>{
        setindex(Math.floor(Math.random()*quote.length))
        setcolor(Math.floor(Math.random()*16777215).toString(16))
    }

    document.body.style.backgroundColor = `#${color}`; 

    return (
        <div className='main'>
            <div className='container'>
                <div className='quote' style={{ color: `#${color}`}}>
                    <i className="fa-solid fa-quote-left"></i>
                    <h1>{quote[index].quote}</h1>
                </div>
                <div className='inside-cont'>
                    <p style={{ color: `#${color}`}}>{quote[index].author}</p>
                    <button style={{ backgroundColor: `#${color}`}} onClick={change}><i className="fa-solid fa-arrow-right" ></i></button>
                </div> 
            </div>
        </div>
    );
};

export default QuoteBox;