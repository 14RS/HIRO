import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'discover-info-modal',
  templateUrl: 'discover-info-modal.html',
})
export class DiscoverInfoModal {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoverInfoModal');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
