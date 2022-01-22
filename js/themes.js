var toggleElement = document.getElementsByClassName('circle');
var toggleSwitch = document.getElementsByClassName('switch__checkbox');

var containerElement = document.getElementsByClassName('container');
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    switch(themeName){
        case 'theme-light':
            toggleElement[0].style.backgroundImage = "url('./img/icons/sun.svg')";
            containerElement[0].style.backgroundColor="#fff";
        break;
        case 'theme-dark':
            toggleElement[0].style.backgroundImage = "url('./img/icons/moon.svg')";
            containerElement[0].style.backgroundColor = "#000";
        break;
    }
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
 }
 
 (function () {
     
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');
        toggleSwitch[0].checked = true;
    } else {
        setTheme('theme-dark');
        toggleSwitch[0].checked = false;
    }
 })();