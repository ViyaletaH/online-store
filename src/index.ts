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
    all: boolean,
    year: number,
    furniture: string,
    price: number,
    name: string,
    picture: string,
};

const data: Array<Card> = [{
    type: 'rent',
    city: 'bangkok',
    rooms: 1,
    all: true,
    year: 2018,
    furniture: 'false',
    price: 500,
    name: 'Studio in Bangkok',
    picture: 'url(images/bangkok/4.png)'
}, {
    type: 'rent',
    city: 'bangkok',
    rooms: 2,
    all: true,
    year: 2014,
    furniture: 'true',
    price: 800,
    name: '2-room apartment in Bangkok',
    picture: 'url(images/bangkok/1.png)',
}, {
    type: 'buy',
    city: 'bangkok',
    rooms: 3,
    all: true,
    year: 2012,
    furniture: 'true',
    price: 250000,
    name: '3-room apartment in Bangkok',
    picture: 'url(images/bangkok/2.png)',
},
{
    type: 'buy',
    city: 'bangkok',
    rooms: 2,
    all: true,
    year: 2018,
    furniture: 'true',
    price: 180000,
    name: '2-rooms apartment in Bangkok',
    picture: 'url(images/bangkok/5.jpg)',
},
{
    type: 'rent',
    city: 'bangkok',
    rooms: 2,
    all: true,
    year: 2015,
    furniture: 'true',
    price: 1000,
    name: '2-rooms apartment in Bangkok',
    picture: 'url(images/bangkok/6.jpg)',
},
{
    type: 'rent',
    city: 'bangkok',
    rooms: 2,
    all: true,
    year: 2019,
    furniture: 'true',
    price: 1700,
    name: '2-rooms apartment in Bangkok',
    picture: 'url(images/bangkok/8.jpg)',
},

{
    type: 'rent',
    city: 'bangkok',
    rooms: 3,
    all: true,
    year: 2020,
    furniture: 'true',
    price: 2500,
    name: '3-room apartment in Bangkok',
    picture: 'url(images/bangkok/7.jpg)',
},
{
    type: 'rent',
    city: 'bangkok',
    rooms: 1,
    all: true,
    year: 2021,
    furniture: 'true',
    price: 1300,
    name: 'Studio in Bangkok',
    picture: 'url(images/bangkok/9.jpg)',
},
{
    type: 'buy',
    city: 'saigon',
    rooms: 1,
    all: true,
    year: 2019,
    furniture: 'false',
    price: 210000,
    name: 'Studio in Saigon',
    picture: 'url(images/hochimin/1.jpg)',
},
{
    type: 'buy',
    city: 'saigon',
    rooms: 2,
    all: true,
    year: 2012,
    furniture: 'true',
    price: 250000,
    name: '2-room apartment in Saigon',
    picture: 'url(images/hochimin/2.jpg)',
},
{
    type: 'rent',
    city: 'saigon',
    rooms: 2,
    all: true,
    year: 2020,
    furniture: 'true',
    price: 1000,
    name: '2-room apartment in Saigon',
    picture: 'url(images/hochimin/3.jpg)',
},
{
    type: 'rent',
    city: 'sing',
    rooms: 1,
    all: true,
    year: 2014,
    furniture: 'true',
    price: 3000,
    name: 'Studio in Singapore',
    picture: 'url(images/singapore/1.jpeg)',
},
{
    type: 'rent',
    city: 'sing',
    rooms: 1,
    all: true,
    year: 2018,
    furniture: 'true',
    price: 4500,
    name: 'Studio in Singapore',
    picture: 'url(images/singapore/2.png)',
}, 
{
    type: 'rent',
    city: 'sing',
    rooms: 1,
    all: true,
    year: 2017,
    furniture: 'true',
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
const rentButt = document.querySelector(".rent")!;
const buyButt = document.querySelector(".buy")!;
const furYes = document.getElementById("fur-y")!;
const furNo = document.getElementById("fur-n")!;
const totalNumber = document.querySelector(".number")!;
const dropd = document.querySelector(".roomsselect")!;
const studio = document.getElementById("studio")!;
const twoR = document.getElementById("two")!;
const threeR = document.getElementById("three")!;
const fourR = dropd.querySelector(".four")!;


const cards = document.querySelectorAll('.card')!;

async function basicLoad () {
    document.addEventListener("DOMContentLoaded", () => {
        loadCards(data);
        totalNumber.innerHTML = data.length + ' Variants found';
    });
}

async function go() {
    const load = await basicLoad();
    console.log(load)
    const keys = await keysListen();
    console.log(keys);
}

go();

//сортировка по городам


    bangBut.addEventListener('click', () => {
        data1 = data;
        apartments.innerHTML = "";
        checkCard.city = 'bang';
        generalFilter();
        loadCards(data1);
    })  
    
    singBut.addEventListener('click', () => {
        data1 = data;
        apartments.innerHTML = "";
        checkCard.city = 'sing';
        generalFilter();
        loadCards(data1);
    })  
    
    saigonBut.addEventListener('click', () => {
        data1 = data;
        apartments.innerHTML = "";
        checkCard.city = 'saigon';
        generalFilter();
        loadCards(data1);
    })  
    //сортировка по типу
    rentButt.addEventListener("click", () => {
        data1 = data;
        apartments.innerHTML = "";
        checkCard.type = 'rent';
        generalFilter();
        loadCards(data1);
    });

    buyButt.addEventListener("click", () => {
        data1 = data;
        apartments.innerHTML = "";
        checkCard.type = 'buy';
        generalFilter();
        loadCards(data1);
    });
    //сортировка по наличию мебели
    furYes.addEventListener('click', () => {
        data1 = data;
        apartments.innerHTML = "";
        checkCard.furniture = 'true';
        generalFilter();
        loadCards(data1);
    });  

    furNo.addEventListener('click', () => {
        data1 = data;
        apartments.innerHTML = "";
        checkCard.furniture = 'false';
        generalFilter();
        loadCards(data1);
    });  

const year = document.querySelector(".y-num")!;

console.log(year.innerHTML);

let data1 = data;
let checkCard: Card = {
    type: 'string',
    city: 'string',
    rooms: 0,
    all: false,
    year: 0,
    furniture: 'string',
    price: 0,
    name: 'string',
    picture: 'string',
};
//фильтр по комнатам
const roomsselect = (document.querySelector('.roomsselect') as HTMLElement);
function dropdown():void {
 
    roomsselect.onchange = (event) => {
    let inputText =  (event.target as HTMLInputElement).value;

        data1 = data;
        apartments.innerHTML = "";
        checkCard.rooms = ~~inputText;
        generalFilter();
        loadCards(data1);

}}
dropdown();
//сортировка в порядках по цене
const sortselect = (document.querySelector('.sortselect') as HTMLElement);
function priceOrder():void {
 
    sortselect.onchange = (event) => {
    let inputText =  (event.target as HTMLInputElement).value;
        apartments.innerHTML = "";
        if(inputText === "lowest") {
            checkCard.picture = 'low';
            generalFilter();
            loadCards(data1);
        };
        if(inputText === "highest") {
            checkCard.picture = 'high';
            generalFilter();    
            loadCards(data1);
        };

}}
priceOrder();

function generalFilter(): void {
    if (checkCard.type !== 'string') {
        checkCard.type === 'rent' ? (data1 = data1.filter(filterRent)) : data1 = data1.filter(filterBuy);
        priceOrder();
    }
    if (checkCard.city !== "string") {
        priceOrder();
        checkCard.city === 'bang' ? (data1 = data1.filter(filterBang)) : (checkCard.city = checkCard.city);
        checkCard.city === "sing" ? (data1 = data1.filter(filterSing)) : (checkCard.city = checkCard.city);
        checkCard.city === "saigon" ? (data1 = data1.filter(filterSaigon)) : (checkCard.city = checkCard.city);
        priceOrder();
    }
    if (checkCard.furniture !== "string") {
        checkCard.furniture === 'true' ? (data1 = data1.filter(filterFury)) : (data1 = data1.filter(filterFurn));
        priceOrder();
    }
    if (checkCard.rooms) {
        checkCard.rooms === 0 ? (data1 = data1.filter(filterAllRooms)) : (checkCard.rooms = checkCard.rooms);
        checkCard.rooms === 1 ? (data1 = data1.filter(filterStudio)) : (checkCard.rooms = checkCard.rooms);
        checkCard.rooms === 2 ? (data1 = data1.filter(filterTwo)) : (checkCard.rooms = checkCard.rooms);
        checkCard.rooms === 3 ? (data1 = data1.filter(filterThree)) : (checkCard.rooms = checkCard.rooms);
        checkCard.rooms === 4 ? (data1 = data1.filter(filterFour)) : (checkCard.rooms = checkCard.rooms);
        priceOrder();
    }
    if (checkCard.picture !== 'string') {
        checkCard.picture === 'low' ? (data1 = data1.sort((a, b) => a.price - b.price)) : (data1 = data1.sort((a, b) => b.price - a.price));
    }

    function filterStudio(item: Card) {
        if (item.rooms === 1) {
          return true;
        }
        }
        function filterTwo(item: Card) {
        if (item.rooms === 2) {
          return true;
        }}

        function filterThree(item: Card) {
            if (item.rooms === 3) {
              return true;
            }
            }
        function filterFour(item: Card) {
            if (item.rooms === 4) {
              return true;
            }}
        function filterAllRooms(item: Card) {
            if (item.all === true) {
                return true;
            }
        }

    function filterRent(item: Card) {
        if (item.type === 'rent') {
          return true;
        }
        }
        function filterBuy(item: Card) {
        if (item.type === 'buy') {
          return true;
        }}

        function filterFurn(item: Card) {
            if (item.furniture === 'false') {
              return true;
            }}

            function filterFury(item: Card) {
                if (item.furniture === 'true') {
                  return true;
                }}

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
        data1.length === 1 ? (totalNumber.innerHTML = data1.length + ' Variant found') : (totalNumber.innerHTML = data1.length + ' Variants found');

}
generalFilter();

//ключи и корзина 

const keys = document.querySelectorAll(".keys")!;
const keyNum = document.querySelector(".key-num")!;

let keyCounter = 0;


async function keysListen() {
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click',() => {
            keyNum.innerHTML = "";
            keyCounter++;
            keyNum.innerHTML = keyCounter.toString();
        });
    }
} 
