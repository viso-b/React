import $ from 'jquery';
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

class Products {
    constructor(){
        this.window = $(window);
        this.$mainConteiner = $('#main-conteiner');
        this.$products = this.createProducts();
        this.$carouselProducts = this.$products.find('#carousel-products');
       
        this.bindEventsListener();
        this.$mainConteiner.append(this.$products);
    }
    bindEventsListener(){
        this.window.on('resize',this.viewProducts.bind(this));
    }
    connectionProducts(){
        this.$carouselProducts.ready(
            $('#carousel-products').owlCarousel({
                responsive:{
                    769:{
                        items:2,
                    },
                    980:{
                        items:3,
                    },
                    1300:{
                        items:4,
                    },
                    1700:{
                        items:6,
                    }
                },
                nav:true,
                loop:true,
            })
        );
    }
    viewProducts(){
        if($(window).width() <= '768'){
            this.$carouselProducts.removeAttr('id')
        }else{
            this.$carouselProducts.attr('id','carousel-products')

            this.connectionProducts();
        }

    }
    createProducts(){	
        return $(`
             <div class="conteiner_popular-products">
                <h1>Cамое популярное</h1>
                <div></div>
                <div  id="carousel-products" class="conteiner-products owl-carousel owl-theme">
                    <div class="product carousel-item">
                        <h2 class="pruduct_section-name">Макияж</h2>
                        <div class="product_img" style="background-image: url('./src/img/product_1.png')"></div>
                        <h4 class="product-name">Givenchy Le Rouge* Помада для губ</h4>
                    
                        <div class="product_pay-container">
                            <div>
                                <div class="product_cost">
                                    <span class="cost discount-sale">1000грн</span>
                                    <span class="discount">900грн</span>
                                </div>
                                <button class="bttn-pay">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div class="product carousel-item">
                
                        <h2 class="pruduct_section-name">Тело и ванна</h2>
                        <div class="product_img" style="background-image: url('./src/img/product_2.png')"></div>
                        <h4 class="product-name">Натуральное масло "Манго"</h4>
                    
                        <div class="product_pay-container">
                            <div>
                                <div class="product_cost">
                                    <span class="cost">97 грн</span>
                                    <span class="discount"></span>
                                </div>
                                <button class="bttn-pay">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div class="product carousel-item">
                
                        <h2 class="pruduct_section-name">Волосы</h2>
                        <div class="product_img" style="background-image: url('./src/img/product_3.png')"></div>
                        <h4 class="product-name">Аюрведический шампунь из индийских трав «Comex»</h4>
                    
                        <div class="product_pay-container">
                            <div>
                                <div class="product_cost">
                                    <span class="cost">62 грн</span>
                                    <span class="discount"></span>
                                </div>
                                <button class="bttn-pay">В корзину</button>
                            </div>
                        </div>
                    </div>

                    <div class="product carousel-item">
                
                        <h2 class="pruduct_section-name">Ногти</h2>
                        <div class="product_img" style="background-image: url('./src/img/product_4.png')"></div>
                        <h4 class="product-name">Лак для ногтей</h4>
                    
                        <div class="product_pay-container">
                            <div>
                                <div class="product_cost">
                                    <span class="cost">132 грн</span>
                                    <span class="discount"></span>
                                </div>
                                <button class="bttn-pay">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div class="product carousel-item">
                    
                        <h2 class="pruduct_section-name">Лицо</h2>
                        <div class="product_img" style="background-image: url('./src/img/product_5.png')"></div>
                        <h4 class="product-name">Маска для лица "3 глины и морские водоросли"</h4>
                    
                        <div class="product_pay-container">
                            <div>
                                <div class="product_cost">
                                    <span class="cost">150 грн</span>
                                    <span class="discount"></span>
                                </div>
                                <button class="bttn-pay">В корзину</button>
                            </div>
                        </div>
                    </div>
                    <div class="product carousel-item">
                
                        <h2 class="pruduct_section-name">Мужчинам</h2>
                        <div class="product_img" style="background-image: url('./src/img/product_6.png')"></div>
                        <h4 class="product-name">Geparlys Karen Low Pure Vibe</h4>
                    
                        <div class="product_pay-container">
                            <div>
                                <div class="product_cost">
                                    <span class="cost">266 грн</span>
                                    <span class="discount"></span>
                                </div>
                                <button class="bttn-pay">В корзину</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        `)
    }
}	
export default new Products();