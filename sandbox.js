const fs = require('fs')
const familyParser = require('./familyParser')
const nameParser = require('./nameParser')
const genres = require('./src/Assets/JSON/raw.json')

const dataParserrrr = (genres) => {
  let currentGenres = []
  const genreFamilies = familyParser(genres)
  const genreNames = nameParser(genres)

  genreFamilies.map(famGenre => {
    genreNames.map(genre => {
        genre.family.map(item => {
            let flagging1 = false

            if(item === famGenre) {
                flagging1 = true
            }

            if(flagging1) {
                let flagging2 = false

                if(currentGenres.length === 0) {
                    currentGenres.push({
                        _id: item,
                        children: [{ _id: genre.name, value: genre.popularity}]
                    })
                } else {
                    for(let i=0; i < currentGenres.length; i++) {
                        if(currentGenres[i]._id === item) {
                            flagging2 = true
                            currentGenres[i].children.push({ _id: genre.name, value: genre.popularity})
                            break
                        } 
                    }   

                    if(!flagging2) {
                        currentGenres.push({
                            _id: item,
                            children: [{ _id: genre.name, value: genre.popularity}]
                        })
                    }
                }               
            }
        })
    })
    fs.writeFileSync('./chartData.json', JSON.stringify(currentGenres, null, 2))
  })  
}