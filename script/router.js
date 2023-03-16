import './modules/routie.js';
import { ulElement, mijndata, repodata } from './modules/data.js'

const book = document.querySelector('main > section');

export async function onRouteChanged(data) {
    routie({
        'repo/': function () {
            book.classList.add('bookclosed');
            book.classList.remove('bookopening');

            // ulElement.innerHTML = `
            // <li> klick op "over" </li>
            // `;
        }
        ,
        'repo/book': function () {
            book.classList.remove('bookclosed');
            book.classList.add('bookopening');
        }
        ,
        'repo/over': function () {
            mijndata();
        }
        ,
        'repo/nextpaper': function () {
            const nextButtons = document.querySelectorAll('main>section ul:nth-of-type(2) li[data-repo] > a[data-action="nextpaper"]');
            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].addEventListener("click", () => {
                    const thisPaper = nextButtons[i].parentNode;
                    thisPaper.classList.add('flibpaper');
                });
            }
        }
        ,
        'repo/previospaper': function () {
            const previosButtons = document.querySelectorAll('main>section ul:nth-of-type(2) li[data-repo] > a[data-action="previospaper"]');
            for (let i = 0; i < previosButtons.length; i++) {
                previosButtons[i].addEventListener("click", () => {
                    const thisPaper = previosButtons[i].parentNode;
                    thisPaper.nextElementSibling.classList.remove('flibpaper');
                });
            }
        }
        ,
        'repo/:repoTitel': async function (repoTitel) {
            await repodata(repoTitel);
        }
    })
}