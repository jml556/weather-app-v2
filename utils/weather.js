const request = require("request");

const weather = (latitude, longitude, callback) => {
  const api = "07193920e59d7a60f74c24bcea7b0883";
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${api}&query=${latitude},${longitude}&units=f`;
  request({ uri: weatherUrl, json: true }, (err, res) => {
    if (err) {
      console.log(err);
      console.log("Error is present", undefined);
    } else {
      const data = res.body.current;
      callback(undefined, data);
    }
  });
};

module.exports = weather;
