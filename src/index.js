import $ from 'jquery';
// Styles
import './styles/global.scss';
// Pages
import Home from './pages/home.html';
// Scripts
import './scripts/main';

function Main(){
    const $FRJS = $('<div id="__FRJS"></div>');
    const HomePage = $(Home);

    $FRJS.empty();
    $FRJS.append(HomePage);

    return $FRJS;
}

$('body').append(Main());
Main;