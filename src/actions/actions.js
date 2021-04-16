module.exports = {
  INITIAL_LOAD: payload => {
    return {
      type: "INITIAL_LOAD",
      payload
    }
  },
  ADD_WORD: payload => {
    return {
      type: "ADD_WORD",
      payload
    }
  },
  DELETE_WORD: payload => {
    return {
      type: "DELETE_WORD",
      payload
    }
  }
}