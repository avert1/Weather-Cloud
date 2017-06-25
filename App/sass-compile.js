const sassC = require('node-sass');
const fs = require('fs');

let css = sassC.renderSync({file:"./Components/CurrentWeatherBox/currentWeatherBox.scss"}).css;
css += sassC.renderSync({file:"./Components/NavBar/navBar.scss"}).css;
css += sassC.renderSync({file:"./Components/PlaylistLister/playlistLister.scss"}).css;
css += sassC.renderSync({file:"./Components/MusicPlayer/musicPlayer.scss"}).css;
fs.writeFile(__dirname+'/public/styles/main.css', css);
console.log('sass compiled');
