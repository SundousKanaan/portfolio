import './modules/routie.js';
import { fetchData } from './modules/fetch.js';
import { ulData,mijndata } from './modules/data.js'

const book = document.querySelector('main > section');
const paper = document.querySelectorAll('main>section ul:nth-of-type(2) li:not(:first-child)');
const nextButton = document.querySelectorAll('main>section ul:nth-of-type(2) li > a:last-of-type');
const titelsLabels = document.querySelector('main>section ul:last-of-type li:first-of-type')

export async function onRouteChanged(data) {
    routie({
        'repo/': function () {
            book.classList.remove('growing');
            ulData.innerHTML=`
            <li> klick op "over" </li>
            `;
        }
        ,
        'repo/book': async function () {
            book.classList.add('growing');
        }
        ,
        'repo/over': function () {
            mijndata();
        }
        ,
        'repo/nextpaper': function () {
            // paper.target.classList.add('flibpaper');
            console.log("next paper");
        }
    })
}