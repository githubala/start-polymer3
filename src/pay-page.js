import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

import "./check-out.js";
import "./checkout-header.js";
import "./products-list.js";
import "./tnc-footer.js";

class PayPage extends PolymerElement {
    constructor(){
        super();
    }
    ready() {
      super.ready();
      this.addEventListener('checkOutItem', function (e) {
        this.checkOutProducts = e.detail.checkOutObj;
        this.checkOutProducts.forEach(function(i){
          console.log(i.prodName);
        })
     })
    }    

    static get template () {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html`
          <style>
            .payPage {
              background: #e9ecee;
            }
            
          </style>

          <app-location route="{{route}}"></app-location>
          <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
    
            <div class="payPage">
            <checkout-header name="header" show-header="{{showHeader}}"></checkout-header> 
            <! content switcher-->
            <iron-pages selected="[[page]]" attr-for-selected="name" selected-attribute="visible" fallback-selection="404">            
            <products-list name="productslist" show-header="{{showHeader}}"></products-list>
                       
            <check-out name="checkout" items={{checkOutProducts}}></check-out>
            </iron-pages> 
            <tnc-footer></tnc-footer>        
          </div>  
        `;
      }

      static get properties () {
        return {
          page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged'
          },
          showHeader: {
            type:  Boolean,
            value: false,
            notify: true
          }
          
        }
      }
  
      static get observers(){
        console.log("test observer");
      return ['_routerChanged(routeData.page)'];
    }
    _routerChanged(page){
      console.log('CHANGED PAGE - ', page);
      this.page = page || 'productslist';
    }
    
    /*
    
    Complex observer triggers on any changes in component. It is required to observe/set current page
    */   
   
   _pageChanged(currentPage, oldPage){
	  console.log('CURRENT - ', currentPage);
	  console.log('OLD - ', oldPage);
	  switch(currentPage){
		  case 'productslist':
			import('./products-list.js').then()
			break;
			default:
			this.page = 'checkout';
	  }
  }
  
  _resetObj(){
    this.checkOutProducts = [];
  }
}

window.customElements.define('pay-page', PayPage);