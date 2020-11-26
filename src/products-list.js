import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js'; 
import "./product-element.js";


let listOfProducts = [
  {
    "productName": "Monika Stationary Sofa Chocolate",
    "attributes": {
      "Material": "Fabric",
      "Color": "Brown",
      "Brand": "Coaster Home Furnishings"
    },
    "image": "https://i.postimg.cc/TP7Q0B9P/image-1.jpg",
    "minOrders": "200",
    "deliveryTime": "1 - 2 weeks",
    "location": "Hyderabad, India",
    "productRating": "4.2",
    "productPrice": "20125"
  },
  {
    "productName": "Oadeer Home Chair Sofas, Yellow",
    "attributes": {
      "Material": "Textile",
      "Color": "Yellow",
      "Brand": "Oadeer Home"
    },
    "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "minOrders": "150",
    "deliveryTime": "1 - 2 weeks",
    "location": "Delhi, India",
    "productRating": "4",
    "productPrice": "10125"
  },
  {
    "productName": "LEPOWER Metal Desk Lamp, Adjustable Goose Neck Table Lamp",
    "attributes": {
      "Item model number": "UT2032",
      "Manufacturer": "LEPOWER",
      "Brand": "LEPOWER"
    },
    "image": "https://i.postimg.cc/26gGRvgR/photo-1505691938895-1758d7feb511.jpg",
    "minOrders": "200",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4"
 
  },
  {
    "productName": "Rivet Revolve Modern Upholstered Sofa Couch, 80'W, Linen",
    "attributes": {
      "Material": "Polyester fabric ",
      "Color": "Linen",
      "Frame Material": "Hardwood"
    },
    "image": "https://i.postimg.cc/59HK79DW/photo-1519710164239-da123dc03ef4.jpg",
    "minOrders": "200",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4",
    "productPrice": "1500"
  },
  {
    "productName": "Ashley Furniture Signature Design - Whitesburg 6-Piece Dining Room Set",
    "attributes": {
      "Product Dimensions": "30 x 35.75 x 60 inches",
      "Manufacturer": "Ashley Furniture",
      "ASIN": "B0753659P3"
    },
    "image": "https://i.postimg.cc/ZqKVrJ6g/photo-1522708323590-d24dbb6b0267.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "50500"
  },
  {
    "productName": "OSP Home Furnishings Papasan Chair with 360-degree Swivel, Black Cushion Frame",
    "attributes": {
      "Material": "Steel",
      "Color": "Brown",
      "Frame Material": "Polypropylene wicker and steel"
    },
    "image": "https://i.postimg.cc/0yCVMzKD/photo-1533044309907-0fa3413da946.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "50500"
  },
  {
    "productName": "Rivet Aiden Mid-Century Modern Tufted Velvet Loveseat Sofa",
    "attributes": {
      "Material": "Velvet",
      "Color": "Hunter Green",
      "Type of product": "Loveseat"
    },
    "image": "https://i.postimg.cc/fy4cgs0M/photo-1547340964-f765a5906c59.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "22500"
  },
  {
    "productName": "Rivet Revolve Modern Upholstered Sofa",
    "attributes": {
      "Material": "Polyester fabric",
      "Color": "Caramel",
      "Frame Material": "Wood"
    },
    "image": "https://i.postimg.cc/261GKTc7/photo-1554995207-c18c203602cb.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "25000"
  },
  {
    "productName": "Frenchi Furniture Wood 3 Pc Vanity Set",
    "attributes": {
      "Material": "Polyester fabric",
      "Color": "Caramel"
    },
    "image": "https://i.postimg.cc/c1V9VyNg/photo-1556020685-ae41abfc9365.jpg",
    "minOrders": "500",
    "deliveryTime": "1 week",
    "location": "Mumbai, India",
    "productRating": "3.5",
    "productPrice": "6073.5"
  },
  {
    "productName": "Uozzi Bedding Queen Thin Duvet Cover Set Blue Gray & Triangles 3 Pieces ",
    "attributes": {
      "Color": "Dark blue",
      "Size": "Queen (1 duvet cover + 2 pillow shams)"
    },
    "image": "https://i.postimg.cc/261GKTc7/photo-1554995207-c18c203602cb.jpg",
    "minOrders": "20",
    "deliveryTime": "1 - 2 weeks",
    "location": "Kolkatta, India",
    "productRating": "4.5",
    "productPrice": "65000"
  }
]
  

class ProductsList extends PolymerElement {
  constructor() {
    super();
    this._reset();  
  }
  ready(){
    super.ready();
    this.isCartEmpty = true;
  }

  static get template() {
    return html`
          <style>
            paper-checkbox {
              --paper-checkbox-checked-ink-color: #FFFFFF;
              --paper-checkbox-unchecked-ink-color: #FFFFFF;
            }
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

<app-location route="{{route}}"></app-location>
<div class="productSelection-Wrapper">
   <div>
      <template is="dom-repeat" items="{{products}}">
          <product-element product={{item}}></product-element>
      </template>

      <template is="dom-repeat" items="{{products}}">
         <div class="productInfo">
            <div class="productImg">
               <img src="{{item.image}}">
            </div>
            <div class="ProdAction">
               <div class="prodName">
                  <h2 id="">[[item.productName]]</h2>
                  <papper-button on-click="addProduct">Add Product</papper-button>
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
                        [[item.minOrders]]
                     </div>
                     <div>
                        [[item.location]]
                     </div>
                  </div>
                  <div>
                     <div>[[item.deliveryTime]]</div>
                  </div>
               </div>
            </div>
         </div>
      </template>
   </div>
   <div class="checkOut-section">
      <template is="dom-if" if="{{isCartEmpty}}">
         <div>
            <img class="cartImg" src="src/assets/images/emptycart.png">
         </div>
      </template>
      <template is="dom-repeat" items="{{listOfselectedProducts}}">
         <div>
            <div>{{item.prodName}}</div>
            <div>{{item.location}}</div>
         </div>
      </template>
      <div>
         <paper-button raised class="indigo"  on-click="handleClick2">Check Out</paper-button>
      </div>
   </div>
   
</div>
`;
  }

  static get properties() {
    return {
      showHeader: {
        type: Boolean,
        notify: true,
        observer: "_checkHeader"
      },
      isCartEmpty: {
        type: Boolean,
        notify: true,
        observer: "_checkCart"
      },
      products: {
        type: Array,
        value: listOfProducts,
        notify: true
      }
    }
  }

  addProduct(e){ 
     let obj = {
        prodName:" ",
        location: " "
      }
      //alert(obj.l)
    obj.prodName = e.model.item.productName;
    obj.location = e.model.item.location;
    this.push('listOfselectedProducts', obj);
       this.isCartEmpty = false;
    console.log(this.listOfselectedProducts);
  }
  handleClick2() {
    this.showHeader = true;
    this.set('route.path', '/check-out')
  }
  // _checkHeader() {
  //   console.log(this.showHeader+"  is show header");
  // }
  _reset(){
    this.listOfselectedProducts = [];
  }
}

window.customElements.define('products-list', ProductsList);