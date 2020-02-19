import $ from 'jquery';

class Brands {
    constructor(){
        this.$mainConteiner = $('#main-conteiner');
        this.$brands = this.createBrand();
        this.$mainConteiner.append(this.$brands);

    }
    createBrand(){	
        return $(`
            <div class="conteiner-brands">
                <h3>Бренды нашего магазина</h3>
                <div>
                    <ul class="list-brands">
                        <li style="background-image: url('./src/img/NYX_logo.png');"></li>
                        <li style="background-image: url('./src/img/sephora_logo.png');"></li>
                        <li style="background-image: url('./src/img/smashbox_logo.png');"></li>
                        <li style="background-image: url('./src/img/chanel_logo.png');"></li>
                        <li style="background-image: url('./src/img/rimmel_logo.png');"></li>
                        <li style="background-image: url('./src/img/simple_logo.png');"></li>
                    </ul>
                </div>
            </div>
        `)
    }
}
export default new Brands();
