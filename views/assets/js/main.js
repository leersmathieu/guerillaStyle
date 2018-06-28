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




/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', function () {
    console.log('callback - particles.js config loaded');
});



particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#a8d8d0", "#eba3ae", "#f8c733"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.8759538822118227,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0.15984015984015984,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5782952832645452,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
