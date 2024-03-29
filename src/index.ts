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
const searcherItself: HTMLInputElement = document.querySelector('.searcherItself')!;
let checker: boolean = false;

document.onkeydown = function keySearch(event: KeyboardEvent): void {
  if (event.code === 'Enter') {
        checker = true;
        line.classList.add('active');

        if (searcherItself.value.length !== 0) {
            clear.classList.add('close');
            generalFilter();
            loadCards(data1);
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

const clear: HTMLElement = document.querySelector(".clearer")!;

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

let cart: Array<string> = [];

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
const keyNum = document.querySelector(".key-num")!;
//если да, то по айди удаляем из массива, снимаем стили. предельная емкость корзины -- 10 элементов.

function loadCards(data: Array<Card>): void {
    if (data.length === 0) {
        apartments.innerHTML = 'No variants found';
    } else {
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
        keys.setAttribute("id", `${i}`);
        pickeys.appendChild(keys);
        keys.addEventListener('click',() => {
            keyNum.innerHTML = "";
            if(keys.classList.contains("chosen")) {
                keys.classList.remove("chosen");
                card.classList.remove("card-choice");
                cart = cart.filter((elem) => (elem !== `${data[i].picture}`));
            } else {
                if (cart.length === 5) {
                    alert('Your cart is full');
                }  else {
                    (cart.push(data[i].picture));
                    keys.classList.add("chosen");
                    card.classList.add("card-choice");
            }}
            keyNum.innerHTML = cart.length.toString();
        });

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
        }
   
};

//отображение карточек
const grid = document.getElementById('grid-view')!;
const list = document.getElementById('list-view')!;

// let card: HTMLElement;

// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve(basicLoad()), 10)
//     });
//     let promiseAgain = new Promise((resolve, reject) => {
//         setTimeout(() => resolve((card = document.querySelector("card")!)), 11)
//       });
      
//     let result = await promise;
//     let secres = await promiseAgain; // будет ждать, пока промис не выполнится (*)
  
// }
  
//   f();

grid.addEventListener("click", () => {
    if(apartments.classList.contains("show-list")) {
    apartments.classList.remove("show-list");
    }
    apartments.classList.add("show-grid");
})

list.addEventListener("click", () => {
    if(apartments.classList.contains("show-grid")) {
        apartments.classList.remove("show-grid");
    }
        apartments.classList.add("show-list");
})


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

function basicLoad () {
    document.addEventListener("DOMContentLoaded", () => {
        loadCards(data);
        totalNumber.innerHTML = data.length + ' Variants found';
    });
};

basicLoad();

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

const yearLabel = document.getElementById('ynum')!;

const yearselect = (document.querySelector('.year-range') as HTMLElement);
function yearSort():void {
 
    yearselect.oninput = (event) => {
    let inputText =  (event.target as HTMLInputElement).value;
        data1 = data;
        apartments.innerHTML = "";
            checkCard.year = ~~inputText;
            yearLabel.innerHTML = inputText;
            generalFilter();    
            loadCards(data1);
}}
yearSort();

// interface Instance extends HTMLElement {
//     noUiSlider: noUiSlider
// }
// slider: noUiSlider.Instance = document.getElementById('slider') as noUiSlider.Instance;

// slider.noUiSlider.get();

// slider = document.getElementById('slider') as noUiSlider.target;

// slider.noUiSlider.on('update', function(values, handle) {
//     // value for updated handle is in values[handle]
// });

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
    if (checkCard.year !== 0) {
        data1 = data1.filter(filterYear);//отловить 
    }
    if (searcherItself.value.length !== 0) {
        data1 = data1.filter(filterSearch);
    }

    function filterYear(item: Card) {
        if (item.year === checkCard.year) {
          return true;
        }
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

        function filterSearch(item: Card) {
            if (item.name.match(searcherItself.value)) {
                console.log(searcherItself.value);
                return true;
            }
        }
        data1.length === 1 ? (totalNumber.innerHTML = data1.length + ' Variant found') : (totalNumber.innerHTML = data1.length + ' Variants found');
        console.log(checkCard.year);
}
generalFilter();

const hamburger: HTMLElement = document.querySelector('.hamburger')!;
const filters: HTMLElement = document.querySelector('.filters')!;
const line1: HTMLElement = document.querySelector('.line1')!;
const line2: HTMLElement = document.querySelector('.line2')!;
const line3: HTMLElement = document.querySelector('.line3')!;
const dark: HTMLElement = document.querySelector('.darkened')!;

function InOut():void {
     filters.classList.toggle('open');
     line1.classList.toggle('open1');
     line2.classList.toggle('open2'); 
     line3.classList.toggle('open3');
     dark.classList.toggle('dark');
  }

  function listener(a:HTMLElement):void {
    return a.addEventListener('click', () => {
        InOut();
     })
  }
  
  listener(hamburger);