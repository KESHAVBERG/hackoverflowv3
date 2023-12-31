const particlesConfig = {
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": false,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "options": {
                "sides": 3
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#800080",
            "opacity": 0.9,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab"]
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1,
                    
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#0E0712",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover",
    }
}
export default  particlesConfig