import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PreferencesPage } from '../preferences/preferences';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.push(PreferencesPage);
  }

  /* Custom code and functions here */

}
