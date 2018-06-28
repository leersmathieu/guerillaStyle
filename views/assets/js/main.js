const navTwoWord = document.querySelector('#navTwoWord')
const navDepot = document.querySelector('#navDepot')
const navContact = document.querySelector('#navContact')

const burgerTwoWord = document.querySelector('#burgerTwoWord')
const burgerDepot = document.querySelector('#burgerDepot')
const burgerContact = document.querySelector('#burgerContact')

let screenHeight = window.innerHeight

const twoWord = () => { 
        TweenLite.to(window, 2, { scrollTo: { y: "#boutique", offsetY:110 } });
        
}

const depot = () => {
    TweenLite.to(window, 2, { scrollTo: { y: ".boutiquesmall", offsetY: 110 } });

}

const contact = () => {
    TweenLite.to(window, 2, { scrollTo: { y: ".contact", offsetY: 0 } });
    
}

navTwoWord.addEventListener('click', twoWord)
navDepot.addEventListener('click', depot)
navContact.addEventListener('click', contact)


burgerTwoWord.addEventListener('click', twoWord)
burgerDepot.addEventListener('click', depot)
burgerContact.addEventListener('click', contact)






