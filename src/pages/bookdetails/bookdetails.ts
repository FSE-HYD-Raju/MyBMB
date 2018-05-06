import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {SMS} from "@ionic-native/sms";
import {CallNumber} from "@ionic-native/call-number";

@Component({
    selector: 'page-bookdetails',
    templateUrl: 'bookdetails.html',
})
export class BookdetailsPage {
    bookObj: any
    showImgSlide: boolean = false;
    tabInfo = 'bookInfo';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private sms: SMS,
                private callSvc: CallNumber,
                public viewCtrl: ViewController) {
        console.log(navParams.get('bookObj'));
        this.bookObj = navParams.get('bookObj');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BookdetailsPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    call() {
        this.callSvc.callNumber('9700124792', true).then(() => {
            console.log('call working');
        }).catch((err) => {
            alert(JSON.stringify(err))
        });
    }

    sendSMS() {
        var options: {
            replaceLineBreaks: true,
            android: {
                intent: 'INTENT'
            }
        }
        this.sms.send('9700124792', 'My first SMS', options).then(() => {
            console.log('sms working');
        }).catch((err) => {
            alert(JSON.stringify(err))
        });
    }
}
