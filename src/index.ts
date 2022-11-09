console.log('hi');

// {
// const yearRange: HTMLElement = document.querySelector('.year-range')!;

// function rangeSlide(value: string) {
//    const yNum: HTMLElement = document.querySelector('.y-num')!;
//    yNum.innerHTML = value;

//    yearRange.addEventListener('mousemove', () => {
//     rangeSlide(this.value);
// });

//     yearRange.addEventListener('onChange', () => {
//         rangeSlide(this.value);
//     })
// }
// }
// onChange="rangeSlide(this.value)" 
// onmousemove="rangeSlide(this.value)"

{
    const priceRange: HTMLElement = document.querySelector('.price-range')!;
}

    const wrapper: HTMLElement = document.querySelector('.wrapper')!;
    const bang: HTMLElement = document.querySelector('.bang-choice')!;
    const saigon: HTMLElement = document.querySelector('.saigon-choice')!;
    const sing: HTMLElement = document.querySelector('.sing-choice')!;

    bang.addEventListener("click", () => {
        wrapper.style.backgroundImage = "url(images/bangkok/wp.jpg)";
    })

    saigon.addEventListener("click", () => {
        wrapper.style.backgroundImage = "url(images/hochimin/wp.jpg)";
    })

    sing.addEventListener("click", () => {
        wrapper.style.backgroundImage = "url(images/singapore/wp.jpg)";
        wrapper.style.backgroundSize = "cover";
    })