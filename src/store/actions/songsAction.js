import axios from 'axios'
const spotifyAccessToken = 'BQBTLFy1qKDop-5TMjGuW4xcVbCc3UYlFneouLGAy0cEoTGoZBoC7it3wwLvH70vrjF8O_VwHVA5UMorwD6sn31nyjsCtVlItZuXQPG2EOkxSwhfPAp1btg4pwrQGr1wqUbaUXUT8-1sIi7ODdEGtPviExIu7K3U1S0IkVMl4qhlVcw9rXP2_nRZsP9Za0gJX6pc0F-HIGKp7WuGrLcWQPorKRESkCiSl1ZnJdee_cc4RKmij2m9zestSWc-2AXWXTexTRVHZ75w5sPaSuq6IxFjTA'
const baseURL = 'https://api.spotify.com/v1'
const random_wildcards = [
  '%25a%25',
  '%25b%25',
  '%25c%25',
  '%25d%25',
  '%25e%25',
  '%25f%25',
  '%25g%25',
  '%25h%25',
  '%25i%25',
  '%25j%25',
  '%25l%25',
  '%25m%25',
  '%25n%25',
  '%25o%25',
  '%25p%25',
  '%25q%25',
  '%25r%25',
  '%25s%25',
  '%25t%25',
  '%25u%25',
  '%25v%25',
  '%25w%25',
  '%25x%25',
  '%25y%25',
  '%25z%25']

// SYNC OP FOR PAGE SONGS
export const fetchingSongs = () => {
  return {
    type: 'FETCHING_SONGS'
  }
}

export const errorFetchSongs = payload => {
  return {
    type: 'ERROR_FETCH_SONGS',
    payload
  }
}

export const fetchedSongs = payload => {
  return {
    type: 'FETCHED_SONGS',
    payload
  }
}

// SYNC OP FOR ARTISTS PAGE
export const fetchingArtists = () => {
  return {
    type: 'FETCHING_ARTISTS'
  }
}

export const errorFetchArtists = payload => {
  return {
    type: 'ERROR_FETCH_ARTISTS',
    payload
  }
}

export const fetchedArtists = payload => {
  return {
    type: 'FETCHED_ARTISTS',
    payload
  }
}

// SYYNC OP FOR BUBBLE CHILDREN
export const fetchingBubbleChildren = () => {
  return {
    type: 'FETCHING_BUBBLECHILDREN'
  }
}

export const errorFetchBubbleChildren = payload => {
  return {
    type: 'ERROR_FETCH_BUBBLECHILDREN',
    payload
  }
}

export const fetchedBubbleChildren = payload => {
  return {
    type: 'FETCHED_BUBBLECHILDREN',
    payload
  }
}

// SYNC OP FOR FOR BUBBLE ARTISTS

export const fetchingBubbleArtists = () => {
  return {
    type: 'FETCHING_BUBBLEARTISTS'
  }
}

export const errorFetchBubbleArtists = payload => {
  return {
    type: 'ERROR_FETCH_BUBBLEARTISTS',
    payload
  }
}

export const fetchedBubbleArtists = payload => {
  return {
    type: 'FETCHED_BUBBLEARTISTS',
    payload
  }
}

// ASYNCHRONOUS OPS

// FOR SONGS PAGE
export const fetchSongs = genre => {

  return async dispatch => {

    try {
      dispatch(fetchingSongs())
      const songsDataHolder = []
      for (let i = 0; i < random_wildcards.length; i++) {
        let randomize = random_wildcards[i]
        let songs = await axios({
          headers: { 
            Authorization: `Bearer ${spotifyAccessToken}` 
          },
          method: 'GET',
          url: `${baseURL}/search?q=${randomize}%20genre:%22${encodeURIComponent(genre)}%22&type=track&offset=10&market=US`
        })
        songs.data.tracks.items.map(track => {
          songsDataHolder.push({
            _id: track?.name,
            value: track?.popularity ? track.popularity : track.popularity + 20,
            colorValue: track?.popularity ? track.popularity : track.popularity + 20,
            preview_url: track?.preview_url,
            artist: track?.artists[0].name
          })
        })
      }
      songsDataHolder.sort((a,b) => (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0))
      dispatch(fetchedSongs(songsDataHolder.filter((v, i, a) => a.findIndex(t => (t._id === v._id)) === i)))
    }

    catch (err) {
      dispatch(errorFetchSongs(err))
    }
  }

}

// FOR ARTISTS PAGE
export const fetchArtists = genre => {

  return async dispatch => {

    try {
      dispatch(fetchingArtists())
      const artistsDataHolder = []
      for (let i = 0; i < random_wildcards.length; i++) {
        let randomize = random_wildcards[i]
        let artists = await axios({
          headers: { 
            Authorization: `Bearer ${spotifyAccessToken}` 
          },
          method: 'GET',
          url: `${baseURL}/search?q=${randomize}%20genre:%22${encodeURIComponent(genre)}%22&type=artist&offset=10&market=US`
        })
        artists.data.artists.items?.map(artist => {
          artistsDataHolder.push({
            _id: artist?.name,
            value: artist?.popularity ? artist.popularity : artist.popularity + 20,
            colorValue: artist?.popularity ? artist.popularity : artist.popularity + 20,
            uri: artist?.uri.split(':')[2]
          })
        })
      }
    artistsDataHolder.sort((a,b) => (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0))
    dispatch(fetchedArtists(artistsDataHolder.filter((v,i,a)=>a.findIndex(t=>(t._id === v._id))===i)))
    }

    catch (err) {
      dispatch(errorFetchArtists(err))
    }
  }

}

// FOR BUBBLE CHILDREN
export const fetchBubbleChildren = genre => {

  return async dispatch => {

    try {
      dispatch(fetchingBubbleChildren())
      const genreDataHolder = []
      for (let i = 0; i < random_wildcards.length; i++) {
        let randomize = random_wildcards[i]
        let bubbleChildren = await axios({
          headers: { 
            Authorization: `Bearer ${spotifyAccessToken}` 
          },
          method: 'GET',
          url: `${baseURL}/search?q=${randomize}%20genre:%22${encodeURIComponent(genre)}%22&type=track&offset=10&market=US`
        })
        bubbleChildren.data.tracks.items.map(track => {
          genreDataHolder.push({
            _id: track?.name,
            value: track?.popularity,
            preview_url: track?.preview_url,
            artist: track?.artists[0].name
          })
        })
      }
      genreDataHolder.sort((a,b) => (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0))
      dispatch(fetchedBubbleChildren(genreDataHolder
        .filter((v,i,a)=>a.findIndex(t=>(t._id === v._id))===i)
        .filter(genre => genre.preview_url)))
    }

    catch (err) {
      dispatch(errorFetchBubbleChildren(err))
    }
  }

}

// FOR PLAYING IN BUBBLE ARTIST
export const fetchBubbleArtists = artist => {
  
  return async dispatch => {

    try {
      dispatch(fetchingBubbleArtists())
      const artistTracks = await axios({
        method: 'GET',
        headers: { 
          Authorization: `Bearer ${spotifyAccessToken}` 
        },
        url: `${baseURL}/artists/${encodeURIComponent(artist)}/top-tracks?market=US`
      })
      dispatch(fetchedBubbleArtists(artistTracks.data.tracks[0].preview_url))
    }

    catch (err) {
      dispatch(errorFetchBubbleArtists(err))
    }
  }
}

