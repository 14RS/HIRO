import { Component, 
         OnInit, 
         ElementRef, 
         ViewChild } from '@angular/core';
import { ModalController, 
         NavController,
         AlertController, 
         Platform, 
         ActionSheetController } from 'ionic-angular';

import { ThankYouPage } from '../thank-you/thank-you';
import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';
import { PreferencesPage } from '../preferences/preferences';
import { LearnMorePage } from '../learn-more/learn-more';

import { DiscoverInfoModal } from './discover-info-modal/discover-info-modal';
import { EsriLoaderService } from 'angular-esri-loader';

@Component({
  selector: 'page-discover-features',
  templateUrl: 'discover-features.html',
  providers: [ EsriLoaderService ]
})
export class DiscoverFeaturesPage implements OnInit {

  @ViewChild('map') mapEl: ElementRef;
  
  constructor(public navCtrl: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              public modalCtrl: ModalController,
              private esriLoader: EsriLoaderService) { 
  }

  goToThankYou(params){
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
  // Actionsheet type
  mapClickType() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Feature type',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Infrastructure',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Infrastructure clicked');
          }
        },
        {
          text: 'Buildings',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Buildings clicked');
          }
        },
        {
          text: 'Miscellaneous',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Miscellaneous clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // Actionsheet magnitude
  mapClickMagnitude() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Feature magnitude',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Severe',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Severe clicked');
          }
        },
        {
          text: 'Moderate',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Moderate clicked');
          }
        },
        {
          text: 'Mild',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Mild clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // Submit points confirmation alert
  submitPoints() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to submit your points?',
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
    let myModal = this.modalCtrl.create(DiscoverInfoModal);
    myModal.present();
    console.log('Modal open clicked');      
  }

  // ESRI map handler
  ngOnInit() {

    let latitude: number = 51.950980, longitude: number = 5.493479, map: any = null, MapPoint: any = null;

    this.esriLoader.load({
      url: 'https://js.arcgis.com/3.20/'
    }).then(() => {

      this.esriLoader.loadModules(['esri/map', 'esri/geometry/Point']).then(([Map, Point]) => {
        // create the map at the DOM element in this component
        map = new Map(this.mapEl.nativeElement, {
          center: [longitude, latitude],
          zoom: 6,
          basemap: "satellite"
          //basemap: "hybrid"
        });

        MapPoint = Point;
      });
    });

  }
}
