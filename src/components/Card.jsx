import { useState, useEffect } from 'react';
import './Card.css'

const Card = ( { cardData } ) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(prev => !prev);
    };

    useEffect(() => {
        setFlipped(false);
    },[cardData])

    return (
        <div className="container">
            <div className="card">
                <div onClick={handleFlip} className={`card-inner ${flipped ? 'flipped' : ''}`}>
                        <div className="card-front">{cardData.question}</div>
                        <div className="card-back">{cardData.answer}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;