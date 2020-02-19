import $ from 'jquery';

class Header {
    constructor(){
        this.$headerConteiner = $('#header-conteiner');

        this.$headerTop = this.createHeaderTop();
        this.$headerMiddle =this.createHeaderMiddle();
        this.$headerDown = this.createHeaderDown();

        this.$inputRegions = this.$headerTop.find('#input-city');
        this.$headerConteiner.append(this.$headerTop).append(this.$headerMiddle).append(this.$headerDown);
        this.bindEventsListener()

    }
    bindEventsListener(){
        this.$headerTop.on('click','.header_top_regions', this.onRegionInputClick.bind(this));
        this.$headerMiddle.on('click','#menu-bttn', this.onMenuBttnClick.bind(this));
    }
    onRegionInputClick(e){
        e.preventDefault();
        const elem = $(e.target);

       if(elem.data('city')){
        this.selectRegion(elem);
        this.removeClass(elem.closest('.select-regions').siblings('.select-container'))
       } else{
        this.toggleClass(elem);
       }
    }
    onMenuBttnClick(){
        this.toggleClass(this.$headerDown);
    }
    toggleClass(elem){
        elem.toggleClass('open');
    }
    removeClass(elem){
        elem.removeClass('open');
    }

    selectRegion(elem){
        const data = {
            nameCity: elem.text(),
            city: elem.data('city')
        }
        this.inputCity(data);
    }
    inputCity(data){
        this.$inputRegions.val(data.nameCity);
        this.$inputRegions.attr('name', data.city);
    }

    createHeaderTop(){	
        return $(`
            <div class="header_top">
                <div class="header_top_regions" id="header_top_regions">
                    <span>Ваш регион</span>
                    <div>
                        <div class="select-container" id="select_input-city">
                            <input id="input-city" readonly value="Регион" name=${this.nameRegion} type="text">
                        </div>
                        <div id="select_list-regions" class="select-regions">
                            <ul>
                                <li data-city="dp">Днепр</li>
                                <li data-city="iev">Киев</li>
                                <li data-city="hrk">Харьков</li>
                                <li data-city="ods">Одесса</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav>
                    <a href="#">Шоурум</a>
                    <a href="#">Контакты</a>
                </nav>
            </div>
        `)
    }
    createHeaderMiddle(){	
        return $(`
            <div class="header_menu">
                <div>
                    <button id="menu-bttn" class="header_menu-bttn"></button>
                    <div>
                        <div class="menu_contact-info">
                            <span class="contact-info_phone">0-800-56-87-96</span>
                            <span class="contact-info_timetable">(пн-пт - 10:00-19:00 сб-вс - 11:00 - 17:00)</span>
                        </div>
                        <button class="menu_bttn-call" id="menu_bttn-call">Заказать звонок</button>
                    </div>
                    <a href="#" class="menu_logo"></a>
                    <form class="container-search">
                        <input class="search_menu" id="inputSearch" type="text"/>
                        <button class="search_button" type="button"></button>
                    </form>
                    <div class="menu_operation-shops">
                        <a href="#" class="comparis" id="comparis"></a>
                        <a href="#" class="shopping-basket" id="shopping-basket"></a>
                    </div>
                </div>
            </div>
        `)
    }
    createHeaderDown(){	
        return $(`
            <div class="conteiner_menu-nav">
                <nav class="header_menu-nav">
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
            </div>
        `)
    }
}	
export default new Header();