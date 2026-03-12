particlesJS("particles-js", {
    "particles": {
        "number": { "value": 120, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#00BFFF", "#87CEFA", "#ADD8E6"] },
        "shape": { "type": ["circle", "star"] },
        "opacity": { "value": 0.8, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.3 } },
        "size": { "value": 4, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 1 } },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#87CEFA",
            "opacity": 0.6,
            "width": 1.5
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});