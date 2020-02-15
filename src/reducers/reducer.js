const initState = {
  words: [
    'hanger','baju','celana','guling','kasur','karpet','meja','kabel','bantal','rumah',
    'lampu','TV','kulkas','laptop','sound','mic','modem','kipas','setrika','senter',
    'bebek','kambing','ayam','gajah','jerapah','kuda','itik','macan','ular','jangkrik',
    'keju','risol','bakwan','biskuit','nasi','kecap','saos','brokoli','tahu','tempe',
    'susu','teh','jus','air putih','kopi','es buah','es krim','sirup','kelapa','bir',
    'sekolah','kantor','rumah sakit','taman','mall','lapangan','danau','masjid','gereja','stasiun',
    'motor','mobil','sepeda','kereta','kapal','pesawat','bis','truk','bajay','becak',
    'dasi','kemeja','jaket','rompi','kaos','jas','handuk','sarung','peci','kerudung',
    'cermin','lipstick','bedak','kuas','masker','sabun','odol','sampo','ember','gayung',
    'brankas','pintu','kalender','jendela','tembok','printer','pensil','pulpen','rantai','kalung',
  ]
}

const rootReducer = (state = initState,action)=>{
  switch(action.type){
    case "ADD_WORD":
      let addWords = action.payload.split(',')
        .map(addWord=>addWord.trim())
        .filter(addWord=>addWord.length>0&&state.words.indexOf(addWord)===-1)
      return{
        ...state,
        words: [...state.words,...addWords]
      }
    case "DELETE_WORD":
      let newWords = state.words.filter(word=>word.toLocaleLowerCase()!==action.payload.toLowerCase())
      return{
        ...state,
        words: newWords
      }
    default:
      return state
  }
}

export default rootReducer