const TTD_Container = document.querySelector('.ttd_container');
const play = document.querySelector('.play');
const card_bottom_work = document.querySelector('.work .card_bottom');
const card_bottom_play = document.querySelector('.play .card_bottom');
const card_bottom_study = document.querySelector('.study .card_bottom');
const card_bottom_exercise = document.querySelector('.exercise .card_bottom');
const card_bottom_social = document.querySelector('.social .card_bottom');
const card_bottom_selfcare = document.querySelector('.selfcare .card_bottom');


function cardData(previousText, Title, CurrentTime, PreviousTime) {
    const cardHTML = `
        <div class="title">
          <h2>${Title}</h2>
          <img src="./images/icon-ellipsis.svg" alt="">
        </div>
        <p class="timing">${CurrentTime}hrs</p>
        <p class="previous_timing">${previousText} - ${PreviousTime}hrs</p>
        `
    return cardHTML;
}

// document.querySelector('.daily').addEventListener('click', function () {
//     this.classList.toggle('active');
// })
// document.querySelector('.weekly').addEventListener('click', function () {
//     this.classList.toggle('active');
// })
// document.querySelector('.monthly').addEventListener('click', function () {
//     this.classList.toggle('active');
// })

const buttons = document.querySelectorAll('ul li button');

buttons.forEach((item) => {
    item.addEventListener('click', function () {

        buttons.forEach((button) => {
            button.classList.remove('active');
        });

        this.classList.add('active');
    });
});

fetch('./data.json').then((response) => response.json()).then((result) => {
    //  console.log(result)
    result.forEach((element) => {
        if (element.title === 'Work') {

            card_bottom_work.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            document.querySelector('.daily').addEventListener('click', function () {
                card_bottom_work.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            })
            document.querySelector('.weekly').addEventListener('click', function () {
                card_bottom_work.innerHTML = cardData("Last Week ", element.title, element.timeframes.weekly.current, element.timeframes.weekly.previous);
            })
            document.querySelector('.monthly').addEventListener('click', function () {
                card_bottom_work.innerHTML = cardData("Last Month", element.title, element.timeframes.monthly.current, element.timeframes.monthly.previous);
            })

        }
        else if (element.title === 'Play') {

            card_bottom_play.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            document.querySelector('.daily').addEventListener('click', function () {
                card_bottom_play.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            })
            document.querySelector('.weekly').addEventListener('click', function () {
                card_bottom_play.innerHTML = cardData("Last Week", element.title, element.timeframes.weekly.current, element.timeframes.weekly.previous);
            })
            document.querySelector('.monthly').addEventListener('click', function () {
                card_bottom_play.innerHTML = cardData("Last Month", element.title, element.timeframes.monthly.current, element.timeframes.monthly.previous);
            })

        } else if (element.title === 'Study') {


            card_bottom_study.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);

            document.querySelector('.daily').addEventListener('click', function () {
                card_bottom_study.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            })
            document.querySelector('.weekly').addEventListener('click', function () {
                card_bottom_study.innerHTML = cardData("Last Week", element.title, element.timeframes.weekly.current, element.timeframes.weekly.previous);
            })
            document.querySelector('.monthly').addEventListener('click', function () {
                card_bottom_study.innerHTML = cardData("Last Month", element.title, element.timeframes.monthly.current, element.timeframes.monthly.previous);
            })

        } else if (element.title === 'Exercise') {

            //cardData(element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            card_bottom_exercise.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            document.querySelector('.daily').addEventListener('click', function () {
                card_bottom_exercise.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            })
            document.querySelector('.weekly').addEventListener('click', function () {
                card_bottom_exercise.innerHTML = cardData("Last Week", element.title, element.timeframes.weekly.current, element.timeframes.weekly.previous);
            })
            document.querySelector('.monthly').addEventListener('click', function () {
                card_bottom_exercise.innerHTML = cardData("Last Month", element.title, element.timeframes.monthly.current, element.timeframes.monthly.previous);
            })
        } else if (element.title === 'Social') {

            //cardData(element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            card_bottom_social.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            document.querySelector('.daily').addEventListener('click', function () {
                card_bottom_social.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            })
            document.querySelector('.weekly').addEventListener('click', function () {
                card_bottom_social.innerHTML = cardData("Last Week", element.title, element.timeframes.weekly.current, element.timeframes.weekly.previous);
            })
            document.querySelector('.monthly').addEventListener('click', function () {
                card_bottom_social.innerHTML = cardData("Last Month", element.title, element.timeframes.monthly.current, element.timeframes.monthly.previous);
            })
        } else if (element.title === 'Self Care') {

            //cardData(element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            card_bottom_selfcare.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            document.querySelector('.daily').addEventListener('click', function () {
                card_bottom_selfcare.innerHTML = cardData("Yesterday", element.title, element.timeframes.daily.current, element.timeframes.daily.previous);
            })
            document.querySelector('.weekly').addEventListener('click', function () {
                card_bottom_selfcare.innerHTML = cardData("Last Week", element.title, element.timeframes.weekly.current, element.timeframes.weekly.previous);
            })
            document.querySelector('.monthly').addEventListener('click', function () {
                card_bottom_selfcare.innerHTML = cardData("Last Month", element.title, element.timeframes.monthly.current, element.timeframes.monthly.previous);
            })
        }
    })
})