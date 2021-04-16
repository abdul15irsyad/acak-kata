import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { DELETE_WORD } from '../../actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons'
import './ListWords.css'

const ListWords = () => {
  document.title = 'Acak Kata | Daftar Kata'
  const history = useHistory()
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const words = useSelector(state => state.words).sort((a, b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1)
  const RandomThis = (word) => {
    history.push('/', { word })
  }
  const List = () => {
    return words.map((word, index) => {
      return (
        <li key={index}>
          {word}
          <span className="delete">
            <FontAwesomeIcon icon={faTimes} onClick={() => deleteWord(word)} />
          </span>
          <span className="use text-secondary">
            <FontAwesomeIcon icon={faLock} onClick={() => RandomThis(word)} />
          </span>
        </li>
      )
    })
  }
  const deleteWord = word => dispatch(DELETE_WORD(word))

  const SearchBar = () => {
    return <input type="text" className="form-control text-center mb-3" name="query" placeholder="search here..." value={query} onChange={handleQuery} />
  }

  const handleQuery = e => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <div className="container-fluid list-word">
      <Link to="/" className="btn btn-primary back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="row justify-content-center">
        <div className="col-auto text-center">
          <h2>Daftar Kata</h2>
          <h6>{words.length} kata</h6>
          <SearchBar />
          <ul>
            <List />
          </ul>
        </div>
      </div>
      <Link to="/add-word" className="btn btn-primary plus">
        <FontAwesomeIcon icon={faPlus} />
      </Link>
    </div>
  )
}

export default ListWords