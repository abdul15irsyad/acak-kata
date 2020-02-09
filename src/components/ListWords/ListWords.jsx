import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './ListWords.css'

const ListWords = ()=>{
  const dispatch = useDispatch()
  const words = useSelector(state => state.words).sort((a,b)=>(a.toLowerCase()>b.toLowerCase())?1:-1)
  const List = ()=>{
    return words.map((word,index)=>{
      return(
        <li key={index}>
          {word}
          <span>
            <FontAwesomeIcon icon={faTimes} onClick={()=>deleteWord(word)}/>
          </span>
        </li>
      )
    })
  }
  const deleteWord = (word)=>{
    dispatch({type:"DELETE_WORD",payload:word})
  }
  return(
    <div className="container-fluid list-word">
      <Link to="/" className="btn btn-primary back">
        <FontAwesomeIcon icon={faArrowLeft}/>
      </Link>
      <div className="row justify-content-center">
        <div className="col-auto text-center">
          <h2>Daftar Kata</h2>
          <h6>{words.length} kata</h6>
          <ul>
            <List/>
          </ul>
        </div>
      </div>
      <Link to="/add-word" className="btn btn-primary plus">
        <FontAwesomeIcon icon={faPlus}/>
      </Link>
    </div>
  )
}

export default ListWords