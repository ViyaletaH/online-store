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

