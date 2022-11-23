import { createReadStream } from 'fs';
import * as noUiSlider from '/Users/37529/online-store/node_modules/nouislider/dist/nouislider.js';
// import * as wNumb from '/Users/37529/online-store/public/wNumb.min.js';

//смена фона на городах (ГОТОВА)
    const wrapper: HTMLElement = document.querySelector('.wrapper')!;
    const bang: HTMLElement = document.querySelector('.bang-choice')!;
    const saigon: HTMLElement = document.querySelector('.saigon-choice')!;
    const sing: HTMLElement = document.querySelector('.sing-choice')!;

    bang.addEventListener("click", (): void => {
        wrapper.style.backgroundImage = "url(images/bangkok/wp.jpg)";
    })

    saigon.addEventListener("click", (): void => {
        wrapper.style.backgroundImage = "url(images/hochimin/wp.jpg)";
    })

    sing.addEventListener("click", (): void => {
        wrapper.style.backgroundImage = "url(images/singapore/wp.jpg)";
        wrapper.style.backgroundSize = "cover";
    })

    const line: HTMLElement = document.querySelector('.line')!;
    const search: HTMLElement = document.querySelector('.search')!;

//эффект на линии при enter'е (ГОТОВ)
let checker: boolean = false;

document.onkeydown = function keySearch(event: KeyboardEvent): void {
  if (event.code === 'Enter') {
        checker = true;
        line.classList.add('active');

        if (searcherItself.value.length !== 0) {
            clear.classList.add('close');
          }
    }

};

document.onkeyup = function keySearch(): void {
    if(checker === true){
        line.classList.remove('active');
  }
  checker = false;
};

//удаление запроса из строки поиска (ГОТОВО)

const clear: HTMLElement = document.querySelector(".clear-search")!;
const searcherItself: HTMLInputElement = document.querySelector('.searcherItself')!;

clear.addEventListener("click", () => {
    searcherItself.value = "";
    clear.classList.remove("close");
});

//двойной слайдер (ГОТОВО) 

const slider: HTMLElement = document.getElementById('price')!;

noUiSlider.create(slider, {
    start: [500, 250000],
    connect: true,
    tooltips: true,
    step: 50,
    range: {
        'min': [500],
        'max': [250000]
    },
//    format: wNumb( { decimals: 0, suffix: '$' }),
});

//карточки

interface Card {
    type: string,
    city: string,
    rooms: number,
    year: number,
    furniture: boolean,
    price: number,
    name: string,
    picture: string,
};

const data = [{
    type: 'rent',
    city: 'bangkok',
    rooms: 1,
    year: 2018,
    furniture: false,
    price: 500,
    name: 'Studio in Bangkok',
    picture: 'url(images/bangkok/4.png)'
}, {
    type: 'rent',
    city: 'bangkok',
    rooms: 2,
    year: 2014,
    furniture: true,
    price: 800,
    name: '2-room apartment in Bangkok',
    picture: 'url(images/bangkok/1.png)',
}, {
    type: 'buy',
    city: 'bangkok',
    rooms: 3,
    year: 2012,
    furniture: true,
    price: 250000,
    name: '3-room apartment in Bangkok',
    picture: 'url(images/bangkok/2.png)',
},
{
    type: 'buy',
    city: 'bangkok',
    rooms: 2,
    year: 2018,
    furniture: true,
    price: 180000,
    name: '2-rooms apartment in Bangkok',
    picture: 'url(images/bangkok/5.jpg)',
},
{
    type: 'rent',
    city: 'bangkok',
    rooms: 2,
    year: 2015,
    furniture: true,
    price: 1000,
    name: '2-rooms apartment in Bangkok',
    picture: 'url(images/bangkok/6.jpg)',
},
{
    type: 'rent',
    city: 'bangkok',
    rooms: 2,
    year: 2019,
    furniture: true,
    price: 1700,
    name: '2-rooms apartment in Bangkok',
    picture: 'url(images/bangkok/8.jpg)',
},

{
    type: 'rent',
    city: 'bangkok',
    rooms: 3,
    year: 2020,
    furniture: true,
    price: 2500,
    name: '3-room apartment in Bangkok',
    picture: 'url(images/bangkok/7.jpg)',
},
{
    type: 'rent',
    city: 'bangkok',
    rooms: 1,
    year: 2021,
    furniture: true,
    price: 1300,
    name: 'Studio in Bangkok',
    picture: 'url(images/bangkok/9.jpg)',
},
{
    type: 'buy',
    city: 'saigon',
    rooms: 1,
    year: 2019,
    furniture: false,
    price: 210000,
    name: 'Studio in Saigon',
    picture: 'url(images/hochimin/1.jpg)',
},
{
    type: 'buy',
    city: 'saigon',
    rooms: 2,
    year: 2012,
    furniture: true,
    price: 250000,
    name: '2-room apartment in Saigon',
    picture: 'url(images/hochimin/2.jpg)',
},
{
    type: 'rent',
    city: 'saigon',
    rooms: 2,
    year: 2020,
    furniture: true,
    price: 1000,
    name: '2-room apartment in Saigon',
    picture: 'url(images/hochimin/3.jpg)',
},
{
    type: 'rent',
    city: 'sing',
    rooms: 1,
    year: 2014,
    furniture: true,
    price: 3000,
    name: 'Studio in Singapore',
    picture: 'url(images/singapore/1.jpeg)',
},
{
    type: 'rent',
    city: 'sing',
    rooms: 1,
    year: 2018,
    furniture: true,
    price: 4500,
    name: 'Studio in Singapore',
    picture: 'url(images/singapore/2.png)',
}, 
{
    type: 'rent',
    city: 'sing',
    rooms: 1,
    year: 2017,
    furniture: true,
    price: 5300,
    name: 'Studio in Singapore',
    picture: 'url(images/singapore/3.png)',
}
];

const apartments = document.querySelector('.apartments')!;

function loadCards(data: Array<Card>): void {
    for (let i = 0 ; i < data.length; i++) {
        const card = document.createElement("div")!;
        card.classList.add("card");
        apartments.appendChild(card);

        const pickeys = document.createElement("div")!;
        pickeys.classList.add("pic-keys");
        card.appendChild(pickeys);

        const photo = document.createElement("div")!;
        photo.classList.add("photo");
        pickeys.appendChild(photo);
        photo.style.backgroundImage = data[i].picture;

        const keys = document.createElement("div")!;
        keys.classList.add("keys");
        pickeys.appendChild(keys);

        const name = document.createElement("div")!;
        name.classList.add("card-name");
        card.appendChild(name);
        name.innerHTML = data[i].name;

        const info = document.createElement("div")!;
        info.classList.add("info");
        card.appendChild(info);
        const typeYear = document.createElement("div")!;
        typeYear.classList.add("type-year");
        info.appendChild(typeYear);

        const cardType = document.createElement("div")!;
        cardType.classList.add("card-type");
        typeYear.appendChild(cardType);
        cardType.innerHTML = data[i].type;

        const cardYear = document.createElement("div")!;
        cardYear.classList.add("card-year");
        typeYear.appendChild(cardYear);
        cardYear.innerHTML = data[i].year.toString();

        const pricelabel = document.createElement("div")!;
        pricelabel.classList.add("pricelabel");
        info.appendChild(pricelabel);
        pricelabel.innerHTML = data[i].price.toString() + '$';
    }
   
};

//сортировки
//запоминать сортировку по каждому варианту в константы (массивы), создать массив, в который будут залетать строки-флаги.
//сортировать по новой на каждом шагу, используя ранее созданные константы
const bangBut: HTMLElement = document.getElementById('bangCh')!;
const saigonBut: HTMLElement = document.getElementById('saigonCh')!;
const singBut: HTMLElement = document.getElementById('singCh')!;

    const cards = document.querySelectorAll('.card')!;
    document.addEventListener("DOMContentLoaded", () => {
        loadCards(data);
    });

    let arr: Array<Card> = [];
//сортировка по городам

let cityF: Array<Card> = [];
let flagC: string[] = [];

function cities() {

    bangBut.addEventListener('click', () => {
        cityF = [];
        flagC = [];
        apartments.innerHTML = "";
        cityF = data.filter(filterBang);
        loadCards(cityF);
        flagC.push('bang');
    })  
    
    singBut.addEventListener('click', () => {
        cityF = [];
        flagC = [];
        apartments.innerHTML = "";
        cityF = data.filter(filterSing);
        loadCards(cityF);
        flagC.push('sing');
    })  
    
    saigonBut.addEventListener('click', () => {
        cityF = [];
        flagC = [];
        apartments.innerHTML = "";
        cityF = data.filter(filterSaigon);
        loadCards(cityF);
        flagC.push('saigon');
    })  
    
    function filterBang(item: Card) {
        if (item.city === 'bangkok') {
          return true;
        }
    }
    
    function filterSing(item: Card) {
        if (item.city === 'sing') {
          return true;
        }
    }
    
    function filterSaigon(item: Card) {
        if (item.city === 'saigon') {
          return true;
        }
    }

    arr = cityF;
    console.log(arr);
}

cities();

    //сортировка съем/покупка
    
    const rentButt = document.querySelector(".rent")!;
    const buyButt = document.querySelector(".buy")!;

    let typeF: Array<Card> = [];
    let flagT: string[] = [];

function types(): void {    

    if (arr.length === 0) {
        arr = data;
    }

    rentButt.addEventListener("click", () => {
        typeF = [];
        flagT = [];
        apartments.innerHTML = "";
        typeF = arr.filter(filterRent);
        loadCards(typeF);
        flagT.push('rent');
    });

    buyButt.addEventListener("click", () => {
        typeF = [];
        flagT = [];
        apartments.innerHTML = "";
        typeF = data.filter(filterBuy);
        loadCards(typeF);
        flagT.push('buy');
    });

    function filterRent(item: Card) {
    if (item.type === 'rent') {
      return true;
    }
    }

    function filterBuy(item: Card) {
    if (item.type === 'buy') {
      return true;
    }
    }
}

types();



