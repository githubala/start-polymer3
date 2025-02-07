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
    /*below listener takes the data from product-element from the object "listObj" assign to listOfselectedProducts*/
    this.addEventListener('listEvt', function (e) {
      var obj = {
        prodName:" ",
        location: " "
      }
      e.detail.listObj.forEach(function(n){
        obj.prodName = n.prodName;
        obj.location = n.location
      });
      this.push('listOfselectedProducts', obj);
      this.isCartEmpty = false;
   })
    
  }

  static get template() {
    return html`
          <style>
            paper-checkbox {
              --paper-checkbox-checked-ink-color: #FFFFFF;
              --paper-checkbox-unchecked-ink-color: #FFFFFF;
            }
          .productSelection-Wrapper {
            display: flex;
              padding: 60px;
              margin: 30px auto;
              width: 960px;
          }
          .checkoutBtn {
            text-align: center;
          }
          .checkoutBtn paper-button {
            background: #4272b0;
            color: #fff;
            font-weight: 600;
            margin-top: 20px;
            border-radius: 0;
            font-size: 14px;
          }
          .checkOut-section {
            margin-left: 20px;
            border: 1px solid lightgrey;
            padding: 5px;
          }
          .selItem {
            margin-bottom: 15px;
          }
          .checkOut-section .cartImg{ 
              width: 200px;
          }
          </style>



<app-location route="{{route}}"></app-location>
<div class="productSelection-Wrapper">
   <div>
   <!--
   below component or element displays each product details and passed with data "products"
   --> 
      <product-element product={{products}}></product-element>
   </div>
   <div class="checkOut-section">
      <template is="dom-if" if="{{isCartEmpty}}">
         <div>
            <img class="cartImg" src="src/assets/images/emptycart.png">
         </div>
      </template>
      <ol>
      <template is="dom-repeat" items="{{listOfselectedProducts}}">
         <li class="selItem">
            <div>{{item.prodName}}</div>
            <div>{{item.location}}</div>
         </li>
      </template>
      </ol>
      <div class="checkoutBtn">
         <paper-button raised class="indigo"  on-click="checkOutList">Check Out</paper-button>
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
        type: Boolean
      },
      products: {
        type: Array,
        value: listOfProducts,
        notify: true
      }
    }
  }
  /* below the custom dispatch event used to sent to "pay-page" comp data generated by function "addToCart" in product-element component 
  listOfselectedProducts which further used to iterate in the added list in the cart section*/
  checkOutList(e) {
    this.showHeader = true;
    var customEvt = new CustomEvent('checkOutItem', {
      bubbles: true, 
      composed: true,
      detail: {checkOutObj: this.listOfselectedProducts}
    });
    this.dispatchEvent(customEvt);
    this.set('route.path', '/check-out');
  }
  _reset(){
    this.listOfselectedProducts = [];
  }
}

window.customElements.define('products-list', ProductsList);