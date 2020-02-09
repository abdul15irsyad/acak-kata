import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faLock } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'
import './Home.css'

const Home = () =>{
  // state pada react hooks
  const [word,setWord] = useState('')

  // useSelector untuk mengambil state dari store
  const words = useSelector(state => state.words)
  const randomWord = ()=>{
    const randomId = Math.floor((Math.random() * words.length) + 0);
    (words[randomId]===word) ? randomWord() : setWord(words[randomId])
  }

  const lockWord = (e)=>{
    let btnRandom = document.getElementsByClassName('random')
    btnRandom[0].disabled = !btnRandom[0].disabled
  }

  // useEffect untuk meload data, parameter kedua adalah state apa saja yang memicu useEffect untuk dijalankan
  useEffect(()=>{
    // randomWord()
  }, [words])

  return(
    <div className="home container-fluid">
      <Link to="/list-word" className="btn btn-primary list">
        <FontAwesomeIcon icon={faList}/>
      </Link>
      <div className="row justify-content-center">
        <div className="col-auto align-self-center text-center">
          <div className="title text-center mb-5">
            <h2 className="mb-0">Acak Kata</h2>
            <p>Mengacak kata kata untuk bermain<br></br>by : abdulirsyad</p>
          </div>
          <button className="btn btn-success random mb-3" onClick={randomWord}>Acak Kata</button>
          <br></br>
          <input 
            className="form-control text-center text-capitalize word" 
            disabled="disabled"
            type="text" 
            value={word}/>
          <br></br>
          <button className="btn btn-info lock" onClick={lockWord}>
            <FontAwesomeIcon icon={faLock}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home