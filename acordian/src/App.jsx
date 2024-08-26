import React, { useState } from 'react'
import SingleQuestions from './Questions'
import data from './data'

const App = () => {

  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return(
              <SingleQuestions key={question.id} {...question} />
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App
