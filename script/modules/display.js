import { ulElement } from './data.js';
const loadingscherm = document.querySelector('body>div');
const audio = document.querySelector('body > Audio');

export async function displayLoading() {

    loadingscherm.classList.add("onloading");

    // to stop loading after some time
    setTimeout(() => {
        loadingscherm.classList.remove("onloading");

        audio.play();
    }, 5000);
}

export function pageLoading() {
    ulElement.innerHTML = "";
    ulElement.innerHTML = `
    <li data-state="repoloading">
    <div>
        <span>
            <span>
                <span></span>
                <span></span>
            </span>
        </span>
    </div>
    </li>
    `;
}

export function errorLoading() {
    ulElement.innerHTML = "";
    ulElement.innerHTML = `
    <li data-state="error">
    <img src="./images/Platform9.png" alt="Platform 9 3/4 symbol">
    <p>Je platform is gesloten, probeer het later nog een keer.</p>
    </li>
    `;
}




