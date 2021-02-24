import axios from 'axios'
const bearerToken = "BQAED1QL7fJQaQMWgE_qT0cHgK26kaY1TsI5bXxsgoyoN_n-TtjrK_QjQrTWscf2pyoGt2PwnuaN2lX43a47nFlDrZzpSWEK-SLj1smqMDjmzp-DT5iWUr70lQLsH_buXvznJ_iOpdAY2Cqbj7MqDPpywxtN_h5CuDqsogktTr0a-c5MFohj3bn8yVq1Mh2nXk9qtRvnlxA8AGfGwOvoUsiQkBjlQJ3cDjS0VzN39fB_5BJLrO-3QgeIeSH2rUjI-dzrC86z_chrrZ6zwRKtvjEo6CE0U90ukRsstx8fAccu"

export function inputArtist(payload) {
  return function (dispatch) {
    dispatch({ 
      type: 'INPUT_ARTIST',
      payload
    })
  }
}

export function inputArtistsList(payload) {
  return function (dispatch) {
    dispatch({ 
      type: 'INPUT_ARTISTSLIST',
      payload
    })
  }
}

export function inputSearchArtist(payload) {
  return function (dispatch) {
    dispatch({ 
      type: 'INPUT_SEARCH_ARTIST',
      payload
    })
  }
}

export function searchingArtist(url) {
  return (dispatch) => {
    axios.get(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`
      }
      })
      .then(({ data }) => { 
        console.log(data);
        dispatch(inputSearchArtist(data.artists.items))
        
      })
      .catch(err => console.log(err))
  }
}

export function getArtist(url) {
  return (dispatch) => {
    axios.get(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`
      }
    })
    .then(({ data }) => { 
      const newArtist = {
        name: data.name,
        followers: data.followers.total,
        images: data.images[0].url,
        genres: data.genres
      }
      console.log(newArtist, 'test');
      dispatch(inputArtist(newArtist))
      
    })
    .catch(err => console.log(err))
  }
}

export function getArtsitsList(url) {
  return (dispatch) => {
    axios.get(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`
      }
      })
      .then(({ data }) => { 
        dispatch(inputArtistsList(data.artists.items))
        
      })
      .catch(err => console.log(err, 'error disini'))
  }
}
