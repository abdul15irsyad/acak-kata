module.exports = {
  ADD_WORD: payload => {
    return{
      type: "ADD_WORD",
      payload
    }
  },
  DELETE_WORD: payload => {
    return{
      type: "DELETE_WORD",
      payload
    }
  }
}