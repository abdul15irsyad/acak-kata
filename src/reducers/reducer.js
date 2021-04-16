const initState = {
  words: []
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIAL_LOAD":
      let words = [...new Set(action.payload)];
      return {
        ...state,
        words
      }
    case "ADD_WORD":
      let addWords = action.payload.split(',')
        .map(addWord => addWord.trim())
        .filter(addWord => addWord.length > 0 && state.words.indexOf(addWord) === -1)
      return {
        ...state,
        words: [...state.words, ...addWords]
      }
    case "DELETE_WORD":
      let newWords = state.words.filter(word => word.toLocaleLowerCase() !== action.payload.toLowerCase())
      return {
        ...state,
        words: newWords
      }
    default:
      return state
  }
}

export default rootReducer