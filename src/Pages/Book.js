import React from 'react';
import StepSelector from '../components/StepSelector';

const Book = () => {
    return(
        <div>
            <div>
                <h1>Complete your booking</h1>
                <p>Great! Just a few more details and we can complete your booking!</p>
            </div>
        <StepSelector />
        </div>
    )
}
export default Book;