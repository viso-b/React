import config from "../../config";

const advertisingTemplate = document.getElementById('templateAdvertising').innerHTML;

export default class Slider {
   
    constructor(elem){
        this.elem = elem;
        this.data = [];
        this.activeIndex = 0;
        this.bttnContainer = this.createElem('div', 'bttn-container');
        this.bttnToggle = document.getElementById('bttnToglle');
        this.advertisingContainer = this.createElem('div', 'advertising-container');

        this.init();

    }
    init(){
        this.appendElemm();
        this.fetchServerData();
        this.bindEventListeners();
    }
    appendElemm(){
        this.elem.append(this.advertisingContainer)
        this.elem.append(this.bttnContainer)
        this.createPagination()
    }
    bindEventListeners(){
        this.bttnContainer.addEventListener('click', this.onPaginationBttnClick.bind(this));
        this.advertisingContainer.addEventListener('click', this.onToggleBttnClick.bind(this));    

    }

    onPaginationBttnClick(e){
        e.preventDefault();
        switch(true){
            case e.target.classList.contains('prev-bttn'): 
                this.hiddenItemSlider(this.activeIndex);
                (this.activeIndex != 0)? this.activeIndex -=1 : this.activeIndex=this.data.length-1;
                this.showItemSlider(this.activeIndex);
            break;
            case e.target.classList.contains('next-bttn'):
                this.hiddenItemSlider(this.activeIndex);
                (this.activeIndex != this.data.length-1)? this.activeIndex +=1 : this.activeIndex=0;
                this.showItemSlider(this.activeIndex);
            break;
            case e.target.classList.contains('first-bttn'): 
                this.hiddenItemSlider(this.activeIndex);
                this.activeIndex = 0;
                this.showItemSlider(this.activeIndex);
            break;
            case e.target.classList.contains('last-bttn'):
                this.hiddenItemSlider(this.activeIndex);
                this.activeIndex = this.data.length-1;
                this.showItemSlider(this.activeIndex);
            break;
        }
    }
    onToggleBttnClick(e){
        if(e.target.classList.contains('bttn-toglle')){
            this.getElemById(this.activeIndex).querySelector('.animation').classList.toggle('open-state')
        }
    }


    fetchServerData(){
        return fetch(config.URL_DATA)
            .then(resp => resp.json())
            .then((data) => {
                this.addId(data);
                this.setData(data);
                this.renderAdvertisingItem(data);
                this.getElemById(this.activeIndex).classList.remove('hidden');
            })
    }
    setData(data) {
        return  this.data = data.map(el => Object.assign(el));
    }
    getElemById(id){
        return this.advertisingContainer.querySelector(`[data-id-advertising="${id}"]`);
    }
    addId(data){
     return data.map((elem, i) => {
        elem['id']=`${i}`;
        return elem;
        })
    }
    renderAdvertisingItem(data){
        const advertisingHtml = data.map( (elem)=>{
           return advertisingTemplate.replace('{{url}}', elem.img)
                                .replace('{{id}}', elem.id)
                                .replace('{{title}}', elem.title)
                                .replace('{{text}}', elem.description);
    });
    this.advertisingContainer.insertAdjacentHTML('beforeend', advertisingHtml.join('\n'));
    }

    showItemSlider(id){
        const elem = this.getElemById(id);
        elem.classList.remove('hidden');
    }
    hiddenItemSlider(id){
        const elem = this.getElemById(id);
        elem.classList.add('hidden');
    }
    createElem(tag, classes, text = ''){
        const elem = document.createElement(tag);
        elem.classList.add(classes);
        elem.innerText = text;
        return elem;
    }
    createPagination(){
        this.bttnContainer.append(this.createElem('button', 'first-bttn','<<<'));
        this.bttnContainer.append(this.createElem('button', 'prev-bttn','<'));
        this.bttnContainer.append(this.createElem('button', 'next-bttn','>'));
        this.bttnContainer.append(this.createElem('button', 'last-bttn','>>>'));  
    }
}