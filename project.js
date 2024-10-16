const circles = document.querySelectorAll('.circle');
const submit = document.querySelector('.submit');
const selectedText = document.querySelector('.selection-text');
const firstContainer = document.querySelector('.first-container')
const secondContainer = document.querySelector('.thank-you-container')

let ratingSelected = false;

circles.forEach(circle =>{
    circle.addEventListener('click', (e)=>{
        const ratings = e.currentTarget.textContent;
        ratingSelected = true;
        rating(ratings);
    });

    // console.log(circle)
})

submit.addEventListener('click', ()=>{

    if(ratingSelected){
        firstContainer.style.display = 'none'
        secondContainer.style.display = 'flex'
    } else{
        alert('Please click on a rating before submitting!')
    }
})

function rating (ratings){
    selectedText.textContent = `You selected ${ratings} out of 5`
}