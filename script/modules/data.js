import { fetchData, fetchreposData, fetchRepo } from './fetch.js';

const ulTitels = document.querySelector('main > section ul:last-of-type');
export const ulData = document.querySelector('main > section ul:nth-of-type(2)');


// titles labels
export async function mijnRepos() {
    const data = await fetchreposData();
    let mijnTitels = data.map(repo => repo.name);
    console.log("mijnRepos data", data);

    const liElement = document.createElement('li');
    const title = document.createElement('a');

    title.href = "#repo/over";
    title.innerText = "over";
    liElement.appendChild(title);
    ulTitels.appendChild(liElement);

    mijnTitels.forEach((repoTitle) => {
        const liElement = document.createElement('li');
        const title = document.createElement('a');

        title.href = "#repo/" + repoTitle;
        title.innerText = repoTitle;
        liElement.appendChild(title);
        ulTitels.appendChild(liElement);
    });
    console.log(ulTitels);
}

mijnRepos();


// my papers data
export async function mijndata(API_URL) {
    const data = await fetchData(API_URL);
    // console.log(data);

    ulData.innerHTML =
        `
    <li>
    <h2>${data.name}</h2>
    <section>
    <div>
    <img src="${data.avatar_url}" alt="Sundous Kanaan avatar foto">
    </div>
    <p>${data.bio}</p>
    <a href = "mailto: Sundous.kn@gmail.com">Sundous.kn@gmail.com</a>
    <a href="tel:+31633875579">+31 6 338 755 79</a>
    </section>
    <section>
    <h3>Over</h3>
    <p>Ik ben user interface designer, ik heb kennis van programmeren en webdesign met (HTML, CSS, Javascript) en ik hou van ontwerpen en tekenen. Ik blijf mijn tekeningen steeds ontwikkelen, en hoop dat ze in de toekomst zó goed worden, dat ze een “merk” worden.</p>
    <p>Ik ben een kunstliefhebber. Ik woon in Velsen-Noord en studeer aan de hoge-School van Amsterdam.</p>
    <p>Ik blijf mijn tekeningen steeds ontwikkelen, en hoop dat ze in de toekomst zó goed worden, dat ze een “merk” worden. Ik kijk veel Japanse series, die vind ik leuk en createf in verschillende opzichten, zoals de toekomstige programma's en innovatieve technische ideeën.</p>
    </section>
    </li>
    `
}

// mijndata();


// <li>
// <h2>${data.name}</h2>
// <img src="${data.avatar_url}" alt="Sundous Kanaan avatar foto">
// <a href = "#repo/nextpaper" ></a>
// </li> 