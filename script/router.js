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

const sdata = await fetchData(API_URL, API_KEY);



        // '/:id': async function (id) {
        //     console.log("id", id);

        //     console.log("data", sdata);

        //     const filteredData = sdata.artObjects.find(schilderij => schilderij.id === id);
        //     // const allItemElements = document.querySelectorAll("main>section:first-of-type ul li");
        //     // const allItemElementsArray = [...allItemElements]
        //     //    const filteredItemElement =  allItemElementsArray.find(item => item.dataset.id === id)
        //     console.log(filteredData);

        //     details();
        // }



// function renderArticle(data) {
//     document.querySelector('div')
//     div.innerHTML = `
//         <article>
//             <h1>${data.title}</h1>
//         </article>
//     `
// }