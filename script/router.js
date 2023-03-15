import './modules/routie.js';
import { fetchData } from './modules/fetch.js';
import { ulData, mijndata, repodata } from './modules/data.js'

const book = document.querySelector('main > section');
const paper = document.querySelectorAll('main>section ul:nth-of-type(2) li:not(:first-child)');
const titelsLabels = document.querySelector('main>section ul:last-of-type li:first-of-type')

export async function onRouteChanged(data) {
    routie({
        'repo/': function () {
            book.classList.remove('growing');
            ulData.innerHTML = `
            <li> klick op "over" </li>
            `;
        }
        ,
        'repo/book': function () {
            book.classList.add('growing');
        }
        ,
        'repo/over': function () {
            mijndata();
        }
        ,
        'repo/nextpaper': function () {
            const nextButtons = document.querySelectorAll('main>section ul:nth-of-type(2) li[data-name] > a[data-action="nextpaper"]');
            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].addEventListener("click", () => {
                    const thisPaper = nextButtons[i].parentNode;
                    thisPaper.classList.add('flibpaper');
                });
            }
        }
        ,
        'repo/previospaper': function () {
            const previosButtons = document.querySelectorAll('main>section ul:nth-of-type(2) li[data-name] > a[data-action="previospaper"]');
            for (let i = 0; i < previosButtons.length; i++) {
                previosButtons[i].addEventListener("click", () => {
                    const thisPaper = previosButtons[i].parentNode;
                    thisPaper.nextElementSibling.classList.remove('flibpaper');
                });
            }
        }
        ,
        'repo/:repoTitel': function (repoTitel) {
            repodata(repoTitel);
            console.log("kkk");
        }
    })
}