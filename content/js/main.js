'use strict';

document.addEventListener('DOMContentLoaded',()=>{

// Карточки - отрисовка
    function renderCard() {
        const container = document.querySelector('.inner');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {

            for (let i=0;i<10;i++){
                let newCard = document.createElement('div'),
                random = Math.floor(Math.random()*7); 
                newCard.className = 'card';
                    newCard.innerHTML = `
                    <img src='content/img/${random>0?random:random+1}.jpg' alt="img">
                    <div class="card-body">
                        <h3>Title</h3>
                        <p class='p_title'>${json[i].title}</p>
                        <p>${json[i].body}<br>${json[i+1].body}<br>${json[i+2].body}</p>
                    </div>
                    `;
                    container.append(newCard);
            }
        })
    }
// Карточки - добавление, по кнопке "Загрузить ещё"
    function moreCard() {
        const moreBtn = document.querySelector('.more_cards');
        moreBtn.addEventListener('click',()=>{
            renderCard();
        });
    }

// Функция открытия окна Оставить заявку
    function openModal(selector) {
        const requestSelector = document.querySelector(selector);
            requestSelector.addEventListener('click', (e)=>{
                if(e.target.className =='request' || e.target.className =='label__border') {
                    document.querySelector('.modal').style.display='block';
                    //  {display: none;}
                } else {
                    return;
                }
            });
    }
// Функция закрытия окна Оставить заявку
    function closeModal(selector) {
        const requestSelector = document.querySelector(selector);
            requestSelector.addEventListener('click', (e)=>{
                if(e.target.id =='close__logo' || e.target.className =='close__border') {
                    document.querySelector('.modal').style.display='none';
                    //  {display: none;}
                } else {
                    return;
                }
            });
    }
    // Бургер меню на мобильных
function burgerMenuShow() {
        const burgerSelector = document.querySelector('.burger'),
              menuSelector = document.querySelector('.menu'),
              hideSelector1 = document.querySelector('.main'),
              hideSelector2 = document.querySelector('.cards'),
              hideSelector3 = document.querySelector('.footer');
        let count = 0

        burgerSelector.addEventListener('click',(e)=>{
            count++;
            if (count<2) {
                menuSelector.style.display = 'inline-block'
            } else {
                menuSelector.style.display = 'none';
                count=0;
            }

            hideSelector1.classList.toggle('hidden');
            hideSelector2.classList.toggle('hidden');
            hideSelector3.classList.toggle('hidden');
        });
}
// Инициализирование основных функций 

    burgerMenuShow();
    openModal('.container_2');
    openModal('.left__container');
    closeModal('.modal__container')
    renderCard();
    moreCard();
});
