// Framework
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { HomePage } from '../pages/home/home';
import { DiscoverFeaturesPage } from '../pages/discover-features/discover-features';
import { LiveImagesPage } from '../pages/live-images/live-images';
import { ThankYouPage } from '../pages/thank-you/thank-you';
//import { SignInPage } from '../pages/sign-in/sign-in';
//import { SignUpPage } from '../pages/sign-up/sign-up';
import { PreferencesPage } from '../pages/preferences/preferences';
import { AboutUsPage } from '../pages/about-us/about-us';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LearnMorePage } from '../pages/learn-more/learn-more';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToThankYou(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ThankYouPage);
  }goToDiscoverFeatures(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DiscoverFeaturesPage);
  }goToLearnMore(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LearnMorePage);
  //}goToSignIn(params){
  //  if (!params) params = {};
  //  this.navCtrl.setRoot(SignInPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PreferencesPage);
  //}goToSignUp(params){
  //  if (!params) params = {};
  //  this.navCtrl.setRoot(SignUpPage);
  }goToLiveImages(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LiveImagesPage);
  }goToAboutUs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutUsPage);
  }goToTutorial(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TutorialPage);
  }

  /* Custom code and functions here */
  
}
