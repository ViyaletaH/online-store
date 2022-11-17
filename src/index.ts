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

const slider = document.getElementById('price')!;

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


document.addEventListener("DOMContentLoaded", () => {
    loadCards(data);
  });

function loadCards(data: Array<Card>): void {
    alert('DOM готов');
    const apartments = document.querySelector('.apartments')!;
    // document.querySelector(".image-container").innerHTML = "";
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
        pricelabel.innerHTML = data[i].price.toString();
        // card.innerHTML = `<img src="${results.urls.regular}">`;
    }
   
};
