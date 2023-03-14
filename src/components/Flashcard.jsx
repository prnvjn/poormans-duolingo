import React from 'react'
import { useState } from 'react'


const Flashcard = (props) => {  
    

  return (

    <div className='flashcard' onClick={props.onClick} >

        <div className={`flashcard-inner ${props.toggle?'flip':''}`}>


            <div className='front'>
                <h2>{props.card.term}</h2>
            </div>
            <div className='back'>
                <h2>{props.card.definition}</h2>
            </div>  

        </div>
        
    
    </div>

  )
}

export default Flashcard