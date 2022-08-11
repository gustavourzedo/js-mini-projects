function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    body.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);

}

function changeText() {
    if(body.classList.contains(darkMode)) {
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }
    button.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON";

}

const darkMode = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode)