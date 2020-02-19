import $ from 'jquery';
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

class Carousel {
    constructor(){
        this.$mainConteiner = $('#main-conteiner');
        this.$slides = this.createSlide();
        this.$mainConteiner.append(this.$slides);

        this.connectionSlides();
    }
    createSlide(){	
        return $(`
            <div id="owl-carousel" class="owl-carousel owl-theme carousel">
                <div class="carousel-item" style="background-image: url('./src/img/banner.png')"></div>
                <div class="carousel-item" style="background-image: url('./src/img/banner.png')"></div>
                <div class="carousel-item" style="background-image: url('./src/img/banner.png')"></div>
            </div>
        `)
    }
    connectionSlides(){
        this.$slides.ready(
            $('#owl-carousel').owlCarousel({
                items:1,
                // singleitem: true,
                nav:true,
                loop:true,
                autoplay:3000,
                transitionStyle: 'fade',

            })
        );
    }
    
}	
export default new Carousel();