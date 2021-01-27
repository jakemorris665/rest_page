import createHeader from './pageLoad.js'
import tabOne from './tabOne.js'
import menuDisplay from './tabTwo.js'
import contactDisplay from './tabThree.js'

function clearScreen(){
    document.getElementById("content").innerHTML = "";
}

function navFunc() {
    document.getElementById("home").addEventListener('click', homeBtn)
    document.getElementById("menu").addEventListener('click', menuBtn)
    document.getElementById("contact").addEventListener('click', contactBtn)
}

function contactBtn(){
    clearScreen();
    createHeader()
    navFunc()
    contactDisplay()
}

function menuBtn(){
    clearScreen();
    createHeader();
    navFunc()
    menuDisplay();
}

function homeBtn(){
    clearScreen();
    createHeader();
    navFunc();
    tabOne();
}

function init(){
    createHeader();
    tabOne();
    navFunc();
}

init()