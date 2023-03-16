import { ulElement } from './data.js';


export function getrepoData(data, documentatie){
    
    ulElement.innerHTML="";

    let pageNummber = 1;
    const li1Element = document.createElement('li');
    const li2Element = document.createElement('li');

    li1Element.innerHTML =
        `
    <h2>${data.name}</h2>
    <label ><input type="checkbox">Filter</label>
    <iframe src="${data.homepage}" frameborder="0" ></iframe>
    <a href="#repo/nextpaper" data-action="nextpaper"></a>
    <div data-value="papernummber">${pageNummber}</div>
    `;

    li2Element.innerHTML =
        `
    <h2>${data.name} ${pageNummber + 1} </h2>
    <p>${data.description}</p>
    <h3>Documentatie: </h3>
    <p>Het grootste programmeertalen bestand: ${data.language}</p>
    <code>${documentatie}</code>
    <a href="#repo/previospaper" data-action="previospaper"></a>
    <div data-value="papernummber">${pageNummber + 1}</div>
    `;

    ulElement.appendChild(li2Element);
    ulElement.appendChild(li1Element);

    const ulDataChilderen = document.querySelectorAll('main > section ul:nth-of-type(2) >li');
    for (let i = 0; i < ulDataChilderen.length; i++) {
        ulDataChilderen[i].dataset.repo = `${data.name}`;
    }

    // console.log(ulElement);
    return ulElement;
}