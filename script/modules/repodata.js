import { ulElement } from './data.js';
import { fetchRepoContents } from './fetch.js';


export async function getrepoData(data) {
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
    <p></p>
    <a href="#repo/nextpaper" data-action="nextpaper"></a>
    <a href="#repo/previospaper" data-action="previospaper"></a>
    <div data-value="papernummber">${pageNummber + 1}</div>
    `;

    // ulElement.appendChild(li2Element);
    // ulElement.appendChild(li1Element);

    const ulDataChilderen = document.querySelectorAll('main > section ul:nth-of-type(2) li');
    console.log(ulDataChilderen.length);

    for (let i = 0; i < ulDataChilderen.length; i++) {
        ulDataChilderen[i].dataset.name = `${data.name}`;
    }

    // console.log(ulElement);

    return [li1Element,li2Element];
}

// export async function rr(repoTitel,path){
//     const repoData = await fetchRepoContents(repoTitel, path);
//     //  const pathContent = decodeURIComponent(atob(repoData.content));
//      const li3Element = document.createElement('li');

//      console.log(li3Element);
// return li3Element;
// }