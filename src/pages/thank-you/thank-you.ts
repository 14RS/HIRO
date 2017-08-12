// Framework
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Pages
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';
import { PreferencesPage } from '../preferences/preferences';
import { LearnMorePage } from '../learn-more/learn-more';

@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html'
})
export class ThankYouPage {

  constructor(public navCtrl: NavController) {
 
  }
  
  goToHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToLearnMore(params){
    if (!params) params = {};
    this.navCtrl.push(LearnMorePage);
  }goToSignIn(params){
    if (!params) params = {};
    this.navCtrl.push(SignInPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.push(PreferencesPage);
  }goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }

  /* Custom code and functions here */
  // Pop to root
  backHome() {
     this.navCtrl.popToRoot();
  }

}
