import {getResource} from '../services/services';

function cards(){
    /* Use (ES6) classes in real work */
    class MenuCard {
         constructor(src, alt, title, descr, price, parentSelector) {
             this.src = src;
             this.alt = alt;
             this.title = title;
             this.descr = descr;
             this.price = price;
             this.parent = document.querySelector(parentSelector);
         }
 
         render() {
             const element = document.createElement('div');
             element.innerHTML = `
                 <div class="menu__item">
                     <img src=${this.src} alt=${this.alt}>
                     <h3 class="menu__item-subtitle">${this.title}</h3>
                     <div class="menu__item-descr">${this.descr}</div>
                     <div class="menu__item-divider"></div>
                     <div class="menu__item-price">
                         <div class="menu__item-cost">Price:</div>
                         <div class="menu__item-total"><span>${this.price}</span> USD/day</div>
                     </div>
                 </div>
             `;
             this.parent.append(element);
         }
     }
 
     getResource('http://localhost:3000/menu')
     .then(data => {
         data.forEach(({img, altimg, title, descr, price}) => {
             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
         });
     });
}

export default cards;