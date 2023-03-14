import { fetchData , fetchRepo} from './fetch.js';

let ul = document.querySelector('main > section ul:nth-of-type(2)');

console.log(ul);

export async function mijndata(API_URL){
    const data = await fetchData(API_URL);
    console.log("mijn data" , data);

    ul.innerHTML=
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
    <button></button>
    </li>
    `


}

mijndata();


