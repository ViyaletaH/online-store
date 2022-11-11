console.log('hi');

//цифры на год
const yearRange: HTMLElement = document.querySelector('.year-range')!;

// yearRange.addEventListener('mousemove', () => {
//     rangeSlide(this.value);
// });

//  yearRange.addEventListener('onChange', () => {
//         rangeSlide(this.value);
// });

function rangeSlide(value: string) {
   const yNum: HTMLElement = document.querySelector('.y-num')!;
   yNum.innerHTML = value;
}

// onChange="rangeSlide(this.value)" 
// onmousemove="rangeSlide(this.value)"

//здесь будут цифры на цену
{
    const priceRange: HTMLElement = document.querySelector('.price-range')!;
}

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
  }
};

document.onkeyup = function keySearch(): void {
    if(checker === true){
        line.classList.remove('active');
  }
  checker = false;
};
