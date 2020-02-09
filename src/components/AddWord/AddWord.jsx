import React, { useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './AddWord.css'

const AddWord = () =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const [word,setWord] = useState('')
  const handleWord = (e) => {
    setWord(e.target.value)
  }
  const addWord = (e)=>{
    e.preventDefault()
    // dispatch to reducer with react hooks
    if(word!==''){
      dispatch({type:"ADD_WORD",payload:word})
      history.push("/list-word");
    }
  }
  return(
    <div className="add-word container-fluid">
      <div className="row justify-content-center">
        <div className="col-auto align-self-center text-center">
          <h2 className="mb-5">Tambah Kata</h2>
          <form onSubmit={addWord}>
            <input 
              className="form-control my-3 text-center text-capitalize" 
              type="text" 
              placeholder="mau nambah apa?" 
              value={word} 
              onChange={handleWord}/>
            <button type="submit" className="btn btn-primary add">Tambah</button>
            <Link to='/list-word' className="btn btn-secondary cancel">Batal</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddWord  