// tns e uma ferramenta do tiny slider
let slider = tns({
    container: ".slide_all",
    "slideBy": "1",
    "speed": 500,
    "nav": false,
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    responsive: {
        1600: {
            items: 4,
            gutter: -300
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        424: {
            items: 1,
            gutter: 20
        }
    }
})