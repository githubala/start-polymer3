import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

let modeOfPay = [
  {"mode":"wallet"},
  {"mode":"Credit"},
  {"mode":"UPI"}
];

class CheckOut extends PolymerElement {
    constructor(){
        super();
    }
    ready(){
      super.ready();
      this.choosePaymentMethod = false;
      // this.wallet = true;
      // this.netBanking = false;      
    }

    static get template(){
        return html`
          <style>
            paper-checkbox {
              --paper-checkbox-checked-ink-color: #FFFFFF;
              --paper-checkbox-unchecked-ink-color: #FFFFFF;
            }
            .checkoutWrapper {
              padding: 60px;
              margin: 30px;
              height: 80vh;
            }
            .AdrsLogIn {
              display: flex;
              justify-content: space-between;
              width: 960px;
              margin: 0 auto;
            }
            .tileView {
              background: #fff;
              padding: 30px;
              margin-bottom: 30px;
            }
            .tileView .nameNContact {
              margin-top: 30px;
              display: flex;
              justify-content: space-between;
            }
            .nameNContact paper-button {
              border: 1px solid lightgrey;
            }
            .address {
              padding: 20px;
              border: 1px solid lightgrey;          
            }
            .currentAddress {
              margin-right: 20px;
            }
            .oldOrNewAddrs {
              display: flex;
            }
            .userStatus {
              width:700px
            }
            .itemsReviews {
              padding: 20px;
              margin-left: 20px;
              background: #fff;
              width: 260px
            }
            .address paper-button {
              background: #4272b0;;
              color: #fff;
              font-weight: 600;
              margin-top: 20px;
              border-radius: 0;
              font-size: 14px;
            }
            .itemsReviews paper-button {
              border: 1px solid lightgrey;
            }
            .itemsReviews .item {
              display: flex;
              justify-content: center;
              margin-bottom: 10px;
            }
            .billFormat {
              display: flex;
                justify-content: space-between;
                border-bottom: 1px solid lightgray;
            }
            .billFormat .billleft > div{
              padding-bottom: 10px;
              margin-top: 10px
            }
            .billFormat .billright > div{
              padding-bottom: 10px;
              margin-top: 10px;
              text-align: right;
            }
            .taxNtotal {
              display: flex;                            
              justify-content: space-between;
            }
            .taxNtotal div > div {
              padding-bottom: 10px;
              margin-top: 10px;
              text-align: right;
            }
            .taxNtotal div > div:last-child {
              font-weight: 600;
            }
            .paraTextFont {
              font-size: 14px;
            } 
            li {
              list-style: none;
            }
            li paper-button {
              border: 1px solid lightgrey;
              margin-bottom: 15px;
            }
            .paymentModesel {
              display: flex;
              justify-content: space-between;
            }
            .scrollBlock {
              max-height: 50vh;
            }
            .checkOutItems {
              overflow: auto;
            }
          </style>
    
<div class="checkoutWrapper paraTextFont">
<div class="AdrsLogIn">
   <div class="userStatus">
      <div class="tileView">
         <h4>
            Logged in
         </h4>
         <div class="nameNContact">
            <div>bala | 9032357197</div>
            <template is="dom-if" if="{{choosePaymentMethod}}">
               <paper-button on-click="changeAddress">CHANGE ADDRESS</paper-button>
            </template>
         </div>
      </div>
      <! 
            delivery address and adding new address
      -->
      <template is="dom-if" if="{{!choosePaymentMethod}}">
         <div class="userAddress tileView">
            <p>Choose delivery address</p>
            <div class="oldOrNewAddrs">
               <div class="currentAddress address">
                  <h4>Home</h4>
                  <div>1-5-617, Rd Number 6, Chaitanyapuri, Kothapet, Hyderabad, Telangana 500060, India</div>
                  <paper-button on-click="gotoPayment">DELIVER HERE </paper-button>
               </div>
               <div class="newAddress address">
                  <h4>Add new address</h4>
                  <div>1-5-617, Rd Number 6, Chaitanyapuri, Kothapet, Hyderabad, Telangana 500060, India</div>
                  <paper-button>ADD NEW </paper-button>
               </div>
            </div>
         </div>
      </template>
      <div class="payBlock tileView">

      <! 
            bill payment modes
      -->
         <template is="dom-if" if="{{choosePaymentMethod}}">
            <p>choose payment method</p>
            <div class="paymentModesel">
               <div>
                  <ul>
                     <li>
                        <paper-button on-click="walletEvt">WALLET</paper-button>
                     <li>
                        <paper-button on-click="netbankingEvt">NETBANKING</paper-button>
                     </li>
                  </ul>
               </div>
               <div>
                  <template is="dom-if" if="{{wallet}}">
                     <div>
                        <p>AMAZON PAY</P>
                        <paper-button> pay 20000</paper-button>
                     </div>
                     <div>
                        <p>Phone PAY</P>
                        <paper-button> pay 20000</paper-button>
                     </div>
                  </template>
                  <template is="dom-if" if="{{netBanking}}">
                     <div>
                        <p>HDFC</p>
                        <p>AXIS</p>
                        <p>STANDARD CHARTERED</p>
                        <p>SBI</p>
                        <p>ICICI</p>
                     </div>
                  </template>
               </div>
            </div>
         </template>
      </div>
   </div>
   <div class="itemsReviews">
      <div class="checkOutItems">
         <div class="scrollBlock">
            <h4>Selected Items</h4>

            <! 
              dynamically added iterated products ms from the selected from product list page 
            -->
            <template is="dom-repeat" items="{{items}}">
               <div class="item">
                  <p>[[item.prodName]]</p>
                  <paper-button>- 1 +</paper-button>
               </div>
            </template>
         </div>
      </div>
      <div class="billDtls">
         <h4>Bill Details</h4>
         <div class="billFormat">
            <div class="billleft">
               <div>product cost</div>
               <div>delivery cost</div>
            </div>
            <div class="billright">
               <div>18,000</div>
               <div>2,000</div>
            </div>
         </div>
         <div class="taxNtotal">
            <div>
               <div>tax and charges</div>
               <div>TO PAY</div>
            </div>
            <div>
               <div>500</div>
               <div>20,500</div>
            </div>
         </div>
      </div>
   </div>
</div>
        `;
    }    

    static get properties() {
      return {
        choosePaymentMethod: {
          type: Boolean,
          notify: true,
          observer: "_choosePayment"
        },
        wallet: {
          type: Boolean,
          notify: true,
          observer: "_wallet"
        }, 
        netBanking: {
          type: Boolean,
          notify: true,
          observer: "_netBanking"
        },         
        payMode: {
        type: Array,
        value: modeOfPay,
        notify: true
      }
      }
    }
    gotoPayment(){
      this.choosePaymentMethod = true;
    }  
    changeAddress(){
      this.choosePaymentMethod = false;
    }
}

window.customElements.define('check-out', CheckOut);