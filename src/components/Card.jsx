import React,{useState} from 'react'
import '../app.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Card({flashcard}) {
    const [flip,setFlip] = useState(false)
  return (
    <div 
    onClick={()=> setFlip(!flip)}
    className={`card ${flip ? 'flip' : ''}`}
    >
        <div className='front'>
            {flashcard.ques}
            <div className='flashcard-options'>
                {flashcard.options.map(option =>{
                    return <div className='flashcard-option'>- {option}</div>
                })}
            </div>
        </div>
        <div className="back">{flashcard.ans}</div>
    </div>
  )
}

export default Card