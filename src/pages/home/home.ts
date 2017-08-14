// Framework
import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

// Pages
import { DiscoverFeaturesPage } from '../discover-features/discover-features';
import { LiveImagesPage } from '../live-images/live-images';
import { ThankYouPage } from '../thank-you/thank-you';
//import { SignInPage } from '../sign-in/sign-in';
//import { SignUpPage } from '../sign-up/sign-up';
import { PreferencesPage } from '../preferences/preferences';
import { LearnMorePage } from '../learn-more/learn-more';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  appTitle: string = 'Welcome';
  constructor(public navCtrl: NavController) {
    console.log(this.appTitle); 
  }
  
  /* Custom code and functions here */

  goToDiscoverFeatures(params){
    if (!params) params = {};
    this.navCtrl.push(DiscoverFeaturesPage);
  }goToLiveImages(params){
    if (!params) params = {};
    this.navCtrl.push(LiveImagesPage);
  }goToThankYou(params){
    if (!params) params = {};
    this.navCtrl.push(ThankYouPage);
  //}goToSignIn(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(SignInPage);
  //}goToSignUp(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(SignUpPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.push(PreferencesPage);
  }goToLearnMore(params){
    if (!params) params = {};
    this.navCtrl.push(LearnMorePage);
  }

  /* Custom code and functions here */
  
}  