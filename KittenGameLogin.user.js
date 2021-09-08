// ==UserScript==
// @name        KGLogin
// @namespace   https://github.com/bluecombats/KittenGameLogin/raw/main/KittenGameLogin.user.js
// @description progress bars
// @include     *kittensgame.com/web/*
// @include     *kittensgame.com/beta/*
// @include     *kittensgame.com/alpha/*
// @version     1.10004
// @grant       none
// @run-at 	document-end
// ==/UserScript==

function initKGL(){
	var KGPInterval = setInterval(function(){
		InsertLogin();
	}, 1000);
}

function InsertLogin(){
  if(document.getElementsByClassName("login-popup button_tooltip tooltip-block")[0]){
    var login = document.getElementsByClassName("login-popup button_tooltip tooltip-block")[0];
    //console.log(login);
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password
    if(login.getElementsByTagName("input")[0]){
       login.getElementsByTagName("input")[0].setAttribute("automComplete","on");
       login.getElementsByTagName("input")[1].setAttribute("automComplete","on");
    }
  }
}
//Main script starts here
initKGL();
