import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-button/paper-button.js';

class ProductElement extends PolymerElement {
    constructor(){
        super();        
        this._reset();  
        this.addToCart();
    }
    static get template () {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html`
        <style>
        .productInfo {
            height: 240px;
            width: 700px;
            left: 0px;
            top: 0px;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            display: flex;
            margin:0 auto;
            margin-bottom: 35px;
        }
        .productImg {    
            left: 0px;
            top: 0px;
            border-radius: 15px;
        
        }
        .productImg img {
            height: 240.00001525878906px;
            width: 320px;
            border-radius: 15px;
        }
        .prodName {    
            display: flex;
            justify-content: space-between;
            padding: 15px;
        }
        .prodName h2 { 
            margin:0;
            font-size: 20px;
            height: auto;
            width: 419px;
        }
        .prodName button{
            height: 21px;
        }
        .ProdAction {
            width: 375px;
        }
        .prodDetails {
            display: flex;
            justify-content: space-between;
            padding: 15px;
        }
        .prodDetails > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        .prodButtons{
            display: flex;
            flex-direction: column;
        }
        .prodButtons button{
            margin-bottom: 10px;
            height: 21px;
            color: #0E8543;
            background: #fff;
            border: 1px solid #0E8543;
            border-radius: 15px;
        }
        .productSelection-Wrapper {
          display: flex;
            padding: 60px;
            margin: 30px auto;
            width: 960px;
        }
        .checkOut-section{
          padding: 30px;
          margin-left: 30px;
          border-radius: 15px;
          border: 1px solid lightgrey
          width: 200px;
          position: fixed;
          right: 430px; 
          text-align: center;
        }
        .cartImg {
          width: 200px;
        }
        paper-button {
          background: #4272b0;
          color: #fff;
          font-weight: 600;
          margin-top: 20px;
          border-radius: 0;
          font-size: 14px;
        }
        </style>

        <div class="productInfo">
            <div class="productImg">
               <img src="{{product.image}}">
            </div>
            <div class="ProdAction">
               <div class="prodName">
                  <h2 id="">[[product.productName]]</h2>
                  <papper-button on-click="addToCart">Add Product</papper-button>
               </div>
               <div class="prodDetails">
                  <div>
                     <div>
                        Attribute: value1
                     </div>
                     <div>
                        Attribute: value2
                     </div>
                     <div>
                        Attribute: value3
                     </div>
                     <div>
                        [[product.minOrders]]
                     </div>
                     <div>
                        [[product.location]]
                     </div>
                  </div>
                  <div>
                     <div>[[product.deliveryTime]]</div>
                  </div>
               </div>
            </div>
         </div>
        `;
      }
    
      static get properties(){
        return {            
            product: {
                type: Array,
                productName: {
                    type: String
                },
                notify: true
            }
        }
      }
      addToCart(){ 
        this.listOfselectedProducts = [];  
        let obj = {
            prodName:" ",
            location: " "
          }
          //alert(obj.l)
        obj.prodName = this.product.productName;
        obj.location = this.product.location;
        this.push('listOfselectedProducts', obj);
           //this.isCartEmpty = false;
        console.log(this.listOfselectedProducts);
     }     
  _reset(){
    //this.listOfselectedProducts = [];
    
  }
}

window.customElements.define('product-element', ProductElement);