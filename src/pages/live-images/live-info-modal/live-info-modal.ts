import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'live-info-modal',
  templateUrl: 'live-info-modal.html',
})
export class LiveInfoModal {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveInfoModal');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
