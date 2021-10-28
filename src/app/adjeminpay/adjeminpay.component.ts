import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
declare const AdjeminPay:any;
declare const API_URL:any;
declare var $: any;


// import { AdjeminPay } from 'https://api.adjeminpay.net/release/seamless/latest/adjeminpay.min.js';

@Component({
  selector: 'app-adjeminpay',
  templateUrl: './adjeminpay.component.html',
  styleUrls: ['./adjeminpay.component.css']
})

export class AdjeminpayComponent implements OnInit {

  @Input() currency: string = '';
  @Input() amount: string = '';
  @Input() signature: string = '';
  @Input() transactionId : string = '';
  @Input() designation : string = 'Produit a achete';

  generateSignature = (): void => {
    console.log(`generateSignature .... ${uuidv4()}`)
    this.signature = uuidv4();
  }

  generateTransactionId = () : void => {
    this.transactionId = uuidv4();
    console.log(`generateTransactionId .... ${this.transactionId}`)
  }

  initPayment = () => {
    console.log('Init Payment ....... ')

    // console.log(AdjeminPay())

    //Import AdjeminPay Class
    AdjeminPay().init({
        client_id : '142',
        client_secret : "uPGKz2mR8snku8xA3wHg54RS4dbloysz4T5kRg3h",
        transaction_id : this.transactionId,
        designation :  this.designation,
        amount :  this.amount,
    });


    AdjeminPay().on('error', function (e : any) {
        // la fonction que vous définirez ici sera exécutée en cas d'erreur
        console.log(e);

        $("#result-title").html(e.title);
        $("#result-message").html(e.message);
        $("#result-status").html(e.status);
    });

    AdjeminPay().preparePayment({
        amount: parseInt(this.amount),
        transaction_id: this.transactionId,
        currency: this.currency,
        designation: this.designation,
        signature : this.signature,
        // notify_url: 'https://webhook.site/427ed2b8-db3e-4ac6-be64-9ecb5b68e420',
      // return_url :'https://application.example.com/return',
      // cancel_url : 'https://application.example.com/cancel'
      // le notify_url est TRES IMPORTANT
        // c'est lui qui permettra de notifier votre backend
    });

    // Si l'étape précédante n'a pas d'erreur,
    // cette ligne génère et affiche l'interface de paiement AdjeminPay
    // AdjeminPay.renderPaymentView();
  }

  constructor() { }

  ngOnInit(): void {
    this.generateSignature(),
    this.generateTransactionId()
  }

}
