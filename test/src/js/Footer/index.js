import $ from 'jquery';

class Footer {
    constructor(){
        this.$footerConteiner = $('#footer-conteiner');
        this.$footerLogo = this.createFooterMobileLogo();
        this.$footerInfo = this.createFooterInfo();
        this.$footerLink = this.createFooterLInk();
        this.$bttnUp = this.$footerInfo.find('#bttn-up');
        
        this.$footerConteiner.append(this.$footerLogo).append(this.$footerInfo).append(this.$footerLink);
        this.bindEventsListener()
    }
    bindEventsListener(){
        this.$footerInfo.on('click','.menu_mobile', this.onMenuBttnMobileClick.bind(this));
        this.$footerInfo.on('click','#bttn-up', this.onBttnUpClick.bind(this));
        $(window).scroll(this.showBttnUpScroll.bind(this))
    }
    showBttnUpScroll(){
        if ($(window).scrollTop() > 500) {
            this.$bttnUp.addClass('show');
          } else {
            this.$bttnUp.removeClass('show');
          }
    }
    onMenuBttnMobileClick(e){
        const elem = $(e.target).closest('.menu_mobile');
        elem.toggleClass('open');
    }
    onBttnUpClick(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    }
    createFooterMobileLogo(){	
        return $(`
            <div class="conteiner_logo-mobile">
                <a href="#" class="logo-mobile"></a>
            </div>
        `)
    }
    createFooterInfo(){	
        return $(`
            <div class="container_info-footer">
                <div class="container_footer_menu">
                    <div class="menu_mobile">
                        <button class="menu_mobile-bttn">разделы сайта</button>
                    </div>
                    <div class="footer_menu">
                        <nav class="footer_menu_products">
                            <a href="#">Макияж</a>
                            <a href="#">ногти</a>
                            <a href="#">волосы</a>
                            <a href="#">парфюмерия</a>
                            <a href="#">лицо</a>
                            <a href="#">тело и ванна</a>
                            <a href="#">мужчинам</a>
                            <a href="#">аксессуары</a>
                            <a href="#">health and care</a>
                            <a href="#">подарки</a>
                            <a href="#">бренды</a>
                        </nav>
                        <div class="footer_menu_info-shop">
                            <a href="#">О компании</a>
                            <a href="#">Бренды</a>
                            <a href="#">Оплата и доставка</a>
                            <a href="#">Возврат и обмен</a>
                            <a href="#">Шоурум</a>
                            <a href="#">Контакты</a>
                        </div>
                    </div>
                </div>
                <div class="info-footer_contact">
                    <div class="menu_contact-info">
                        <span class="contact-info_phone">+3 (095) 721-64-63 </span>
                        <span class="contact-info_timetable">(пн-пт - 10:00-19:00 сб-вс - 11:00 - 17:00)</span>
                    </div>
                    <button class="menu_bttn-call" id="menu_bttn-call">Заказать звонок</button>
                </div>
                <div class="info-footer_pay">
                    <h6>Мы принимаем <span>любой способ оплаты</span></h6>
                    <div class="pay_conteiner_logo">
                        <span class="card" style="background-image: url('./src/img/visa.png');"></span>
                        <span class="card" style="background-image: url('./src/img/mastercard.png');"></span>
                    </div>
                </div>
                <button class="bttn-up" id="bttn-up"></button>
            </div>

        `)
    }
    createFooterLInk(){	
        return $(`
            <div class="conteiner_footer-links">
                <a href="#" class="menu_logo"></a>
                <a href="##" class="email_link">© 2013-2017 «Benefit» — интернет-магазин косметики email: <span>zakaz@benefit.ru</span></a>
            </div>
        `)
    }
}
export default new Footer();

