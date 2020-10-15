import React from 'react'
import styled from 'styled-components'

const EightBallAnswer = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 33%;
    margin-left: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .answerText {
        color:purple;
    }
`;
const EightBallShape = styled.div`
    height: 250px;
    width: 250px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 20px;
`;
const Answer = props => {
    return (
        <>
            <EightBallShape>
                <EightBallAnswer><span className="answerText">{props.answer}</span></EightBallAnswer>
            </EightBallShape>
        </>
    )
}

export default Answer