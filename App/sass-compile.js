const sassC = require('node-sass');
const fs = require('fs');

sassC.render({file:"./Components/CurrentWeatherBox/currentWeatherBox.scss"},
  function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
      fs.writeFile(__dirname+'/public/styles/main.css', result.css, function(err){
        if(!err){
          console.log("no error");
        }
        else {
          console.log(err);
        }
      });
    }
  }
);
