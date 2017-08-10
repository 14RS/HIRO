import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';
import { PreferencesPage } from '../preferences/preferences';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.push(PreferencesPage);
  }

  /* Custom code and functions here */

}
