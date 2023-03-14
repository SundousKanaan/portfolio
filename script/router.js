import './modules/routie.js';
import { fetchData } from './modules/fetch.js';

export async function onRouteChanged(data) {
    routie({
        'object/open_image': function (){
            article.classList.add('openimg');
        }
        ,
        'object/details_page': function (){
            article.classList.remove('openimg');
        }
        ,
        'object/zoekbalk': function (){
            header.style.display='none';
        }
        ,
        'object/zoeken_page': function (){
            article.innerHTML='';
            article.style.display = "none";
            main.style.padding='2em 1em 0 1em';

            mainElementen.forEach(mainElement =>{
                mainElement.style.display ='';
            })
        }
        ,
        'object/:objectNumber': async function (objectNumber) {
            var item_details = get_details(objectNumber);
            console.log("item_details", item_details);
            header.style.display='none';
            main.style.padding='0 1em 0 1em';

            mainElementen.forEach(mainElement =>{
                mainElement.style.display ='none';
            })
        }
    })
}

// const data = await fetchData(API_URL);