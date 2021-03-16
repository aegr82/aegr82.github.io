document.addEventListener('DOMContentLoaded', () => {
    // card options
    // son 12 cartas (6x2) cada una de 100x100 px,
    // es por eso que el <div> es de 300x400 px con wrap pa que se ajusten
    const cardArray = [
        {
            name: 'cheeseburger',
            image: '/images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            image: '/images/cheeseburger.png'
        },
        {
            name: 'fries',
            image: '/images/fries.png'
        },
        {
            name: 'fries',
            image: '/images/fries.png'
        },
        {
            name: 'hotdog',
            image: '/images/hotdog.png'
        },
        {
            name: 'hotdog',
            image: '/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            image: '/images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            image: '/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: '/images/milkshake.png'
        },
        {
            name: 'milkshake',
            image: '/images/milkshake.png'
        },
        {
            name: 'pizza',
            image: '/images/pizza.png'
        },
        {
            name: 'pizza',
            image: '/images/pizza.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random()) // desordenar los pares

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result') // poner el resultado en el <span>
    const clicksDisplay = document.querySelector('#clicks')

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i) // data attribute w.o. visual representation
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match")
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert("Sorry, try again")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations!'
        }
    }

    // flip your card
    function flipCard() {
        if (this.getAttribute('src') !== 'images/white.png') {
            clicksDisplay.textContent++
            var carId = this.getAttribute('data-id')
            if (cardArray[carId].name)
            cardsChosen.push(cardArray[carId].name)
            cardsChosenId.push(carId)
            this.setAttribute('src', cardArray[carId].image)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
    }

    createBoard()
})