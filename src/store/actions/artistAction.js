import axios from 'axios'
const bearerToken = "BQAvhzJpXTRuH-Dr5Hyoy5GjHuR2J8A93eEXD5sFd3VimUpJNkVfAtKJBuFgXg98LMkP90ogJ2UqvBnnKvRxEOfZM9TTloPd5wBaYb0K_HoLWHJzFXZT3KOwqte1PGvimVPh2DvjGtbBOpH1JyD16IwYEsMikPkRDficmLPjkkvfZ0xaAv2mYjff5o5MSI-wwQAZdqlBnG7FCenQQbWLE7eJh5zXijS1rwTkDhcMF_FQA3gQaF2YbCnhvtxmROYAp2oQSrL7c5FFG-P9p7QVSR5Jt7d7I3cIJrj4cm_jTFGp"

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
