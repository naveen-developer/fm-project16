const buttons = document.querySelectorAll('ul li button');
const cardData = (previousText, title, currentTime, previousTime) => {
    return `
        <div class="title">
          <h2>${title}</h2>
          <button class="ellipses" aria-label="Open options"><img src="./images/icon-ellipsis.svg" alt=""></button>
        </div>
        <p class="timing">${currentTime}hrs</p>
        <p class="previous_timing">${previousText} - ${previousTime}hrs</p>
     
    `
}

const updateCards = (data, timeFrame) => {

    let previousText = '';
    if (timeFrame === 'daily') {
        previousText = 'Yesterday'
    } else if (timeFrame === 'weekly') {
        previousText = 'Last Week'
    } else {
        previousText = 'Last Month'
    }

    data.forEach((item) => {
        const className = item.title.toLowerCase().replace(' ', '');
        const cardBottom = document.querySelector(`.${className} .card_bottom`);
        cardBottom.innerHTML = cardData(
            previousText, item.title, item.timeframes[timeFrame].current,
            item.timeframes[timeFrame].previous
        )

    })
}

fetch('./data.json').then((response) => response.json()).then((result) => {
    updateCards(result, 'weekly');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            buttons.forEach((button) => {
                button.classList.remove('active');
                button.setAttribute('aria-current', 'false');
            })
            console.log(this)
            this.classList.add('active');
            this.setAttribute('aria-current', 'true');

            const timeframe = this.className.replace(' active', '');
            updateCards(result, timeframe);
        })
    })
})