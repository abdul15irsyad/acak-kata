import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { ADD_WORD } from '../../actions/actions'
import './AddWord.css'

const AddWord = () => {
  document.title = 'Acak Kata | Tambah Kata'
  const dispatch = useDispatch()
  const history = useHistory()
  const words = useSelector(state => state.words)
  const [message, setMessage] = useState('')
  const [word, setWord] = useState('')
  const handleWord = (e) => {
    setWord(e.target.value)
  }
  useEffect(() => {
    let message = document.getElementById('message')
    let btnSubmit = document.querySelector('button')
    let existWords = word.split(',')
      .map(inputWord => inputWord.trim())
      .filter(inputWord => words.indexOf(inputWord) >= 0)
    if (existWords.length > 0) {
      setMessage(`"${existWords.join(', ')}" sudah ada di daftar kata!`)
      message.style.display = 'block'
      btnSubmit.disabled = true
    } else {
      setMessage('')
      message.style.display = 'none'
      btnSubmit.disabled = false
    }
    // eslint-disable-next-line
  }, [word])
  const addWord = (e) => {
    e.preventDefault()
    // dispatch to reducer with react hooks
    if (word !== '') {
      dispatch(ADD_WORD(word))
      history.push("/list-word")
    }
  }
  return (
    <div className="add-word container-fluid">
      <div className="row justify-content-center">
        <div className="col-auto align-self-center text-center">
          <h2 className="mb-5">Tambah Kata</h2>
          <form onSubmit={addWord}>
            <input
              className="form-control mt-3 text-center text-capitalize"
              type="text"
              placeholder="mau nambah apa?"
              value={word}
              onChange={handleWord} />
            <small id="message">{message}</small>
            <button type="submit" className="btn btn-primary mt-3 add">Tambah</button>
            <Link to='/list-word' className="btn btn-secondary mt-3 cancel">Batal</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddWord