import React, {useState} from 'react'
import Answer from './Answer'


const EightBall = (props) => {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState('')
    const _handleChange = (question) => {
        setQuestion(question)
    }
    const _handleSubmit = async (e) =>{
        
        e.preventDefault()
        const url = `https://8ball.delegator.com/magic/JSON/${question}`
        const response = await fetch(url)
        const data = await response.json()
        setAnswer(data.magic.answer)
        setQuestion('')
    }
    return (
        <>
            <h1>Magic Eight Ball</h1>
            <form onSubmit={(event)=>_handleSubmit(event)}>
                <input type="text" value={question} onChange={event=>_handleChange(event.target.value)}></input>
                <button type="submit">Ask</button>
            </form>
            {!!answer ? <Answer answer={answer} />:null}
        </>
    )
}

export default EightBall