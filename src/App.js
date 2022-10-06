
import { get } from 'http';
import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';


const API_RANDOM = "https://api.adviceslip.com/advice"





const App = () => {

  const [quote, setQuote] = useState([])
  const [advice, setAdvice] = useState("")
  const [adviceId, setAdviceId] = useState("")
  const [loading, setLoading] = useState(true)


  const apiCall = () => {
    fetch(API_RANDOM)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setQuote(data)
    })
  }
  let getAdvice
  let getId
  


useEffect(() => {
    fetch(API_RANDOM)
    .then((response) => response.json())
    .then((data) => {
      setQuote(data)
      setLoading(false)
      getAdvice = data.slip.advice
      getId = data.slip.id
      setAdvice(advice => getAdvice)
      setAdviceId(adviceId => getId)
    })
  }, [])



const handleCLick = () => {
 getAdvice = quote.slip.advice
 getId = quote.slip.id
 setAdvice(advice => getAdvice)
 setAdviceId(adviceId => getId)
 apiCall()
}






   
    return (
      <div className="App">
        <div className='container'>
        {loading ? (<p>loading...</p>) :(
          <div>   
            <h2 className='advice-id'>ADVICE #{adviceId}</h2>
            <h1 className='advice-text'>"{advice}"</h1>
          </div>)
        }
        <div>
          <span></span>
          <div className='circle'></div>
        </div>
        <div className='button-container'>
          <button onClick={handleCLick}></button>
        </div>
      </div>
      
      </div>
    );
  
}

export default App;
