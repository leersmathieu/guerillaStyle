const navTwoWord = document.querySelector('#navTwoWord')
const navDepot = document.querySelector('#navDepot')
const navContact = document.querySelector('#navContact')

const burgerTwoWord = document.querySelector('#burgerTwoWord')
const burgerDepot = document.querySelector('#burgerDepot')
const burgerContact = document.querySelector('#burgerContact')

let screenHeight = window.innerHeight

const twoWord = () => { 
        TweenLite.to(window, 2, { scrollTo: { y: "#boutique", offsetY: 10 } });
        
}

const depot = () => {
    TweenLite.to(window, 2, { scrollTo: { y: ".boutiquesmall", offsetY: 0 } });

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



// let saveNavTwoWord = "En deux mots"
// console.log(saveNavTwoWord)

// let i = 1
// const underline = (nav, saveNav) => {
    
//     console.log(saveNav.length)
    
//         let sliced = saveNav.slice(0,i)
//         console.log(sliced)
//         let slicedNext = saveNav.slice(i, saveNav.length)
//         console.log(slicedNext)
//         nav.innerHTML="<u>"+sliced+"</u>"+slicedNext
//         i++
//         if (i >= saveNav.length){
//             clearInterval(interval)
//         }
    

// }
// let interval = window.setInterval(underline(navTwoWord, saveNavTwoWord), 1000)


