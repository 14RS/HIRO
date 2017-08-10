import { Component } from '@angular/core';
import { ModalController, 
         NavController,
         AlertController, } from 'ionic-angular';

import { DiscoverFeaturesPage } from '../discover-features/discover-features';
import { ThankYouPage } from '../thank-you/thank-you';
import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';
import { PreferencesPage } from '../preferences/preferences';
import { LearnMorePage } from '../learn-more/learn-more';

import { LiveInfoModal } from './live-info-modal/live-info-modal';

@Component({
  selector: 'page-live-images',
  templateUrl: 'live-images.html'
})
export class LiveImagesPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController,) {
  }
  
  goToDiscoverFeatures(params){
    if (!params) params = {};
    this.navCtrl.push(DiscoverFeaturesPage);
  }goToThankYou(params){
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  }goToSignIn(params){
    if (!params) params = {};
    this.navCtrl.push(SignInPage);
  }goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.push(PreferencesPage);
  }goToLearnMore(params){
    if (!params) params = {};
    this.navCtrl.push(LearnMorePage);
  }

  /* Custom code and functions here */
  // Submit points confirmation alert
  submitImages() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to submit your images?',
      buttons: [          
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.navCtrl.push(ThankYouPage);
          }
        }
      ]
    });
    alert.present();
  }

  // Modal info screen
  openModal() {
    let myModal = this.modalCtrl.create(LiveInfoModal);
    myModal.present();
  }
}
