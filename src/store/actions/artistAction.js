import axios from 'axios'
const bearerToken = "BQC-SXHmdItHyX4fTg4mSisARauZm1YCw3qcPtrTyw_PZq-UnQPcOM_aH8rT_f3GFYH-iLLcIz5IVnmzy5NqZaIY8Le5OvfBm62TnemYPbn0gQqtx6Cji6KQA27yjmzuhECfLw-kj4Z-6vZmaZaRG-eaTxZiqw6dEkCM-N-_SfQxDbcD1xWBifMjjZI2EXhHBGbVtLgTW-51t0PrOSTL3cbnVykdDdrw777HRrmsnaQZQ5Q8wVNOTr8c2UmRDFTsZWfLfe9MwruldH1yV48SCMOcMrmjBsITGxnUjuxXfNXu"

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
      console.log(newArtist);
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
