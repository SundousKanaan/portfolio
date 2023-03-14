import './modules/routie.js';
import { fetchData } from './modules/fetch.js';
import { ulData , mijndata , repodata } from './modules/data.js'

const book = document.querySelector('main > section');
const paper = document.querySelectorAll('main>section ul:nth-of-type(2) li:not(:first-child)');
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
            const nextButton = document.querySelector('main>section ul:nth-of-type(2) li[data-name] > a:last-of-type');
            const mybutton = nextButton.target;
            nextButton.parentNode.classList.add('flibpaper');
            console.log("next paper" , mybutton);
        }
        ,
        'repo/:repotitel': async function (repotitel) {
            await repodata(repotitel);
        }
    })
}