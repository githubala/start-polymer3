import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-button/paper-button.js';

class CheckoutHeader extends PolymerElement {
    constructor(){
        super();
    }
    static get template () {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html`
          <style>          
            .headerWrapper {
              padding: 20px;
              background: #fff;
              display: flex;
              justify-content: center;
              position: fixed;
              width: 100%;
              top: 0;
              z-index:9;
            }
            .checkoutWrapper {
              width: 1200px;
              display: flex;
              justify-content: space-between;
            }
            .rightHeader {
              display: flex;
              justify-content: space-around;
              width: 250px;
            }
            .rightHead {
              display: flex;
            }
            .logo {
              width: 24px;
            }
          </style>

           
          <div class="headerWrapper"> 
            <div class="checkoutWrapper">
                <div><span><img class="logo" src="src/assets/images/LOGO.png"></span><span>WOOD WORLD</span></div>
                <div class="rightHead">
                    <template is="dom-if" if="{{!showHeader}}">
                      <div class="rightHeader">
                        <span>
                          search
                        </span>
                        <span>
                          offers
                        </span>
                      </div>
                  </template>
                  <div class="rightHeader">
                      <span>
                        help
                      </span>
                      <span>
                        profile name
                      </span>
                  </div>
                </div>                
            </div>
          </div>  
        `;
      }
    
      static get properties(){
        return {          
          showHeader: {
            type:  Boolean,
            notify: true,
            observer:"_checkHeader"
          }
        }
      } 
      _checkHeader(){
        console.log(this.showHeader)
      } 
}

window.customElements.define('checkout-header', CheckoutHeader);