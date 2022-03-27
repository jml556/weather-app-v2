const request = require('request')

const geoCode = (address, callback) => {
  const key = `pk.eyJ1IjoibXJzcXVhc2gxNCIsImEiOiJjbDE4MjJoZGUwbXY1M2NvM3VyOWc0cDQ1In0.c5Kzg2kCdR9iwDCwzoqv9Q`;
  const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${key}&limit=1`;
  request({uri: mapUrl, json: true}, (error, response) => {
    if(error) {
      callback('uanble to find location', undefined)
    }
    else {
      const center = response.body.features[0].center;
      const [longitude, latitude] = center;
      callback(undefined, {
        longitude,
        latitude
      })
    }
  })
}

module.exports = geoCode