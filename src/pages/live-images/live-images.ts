//Framework
import { Component, 
         OnInit, 
         ElementRef, 
         ViewChild } from '@angular/core';
import { ModalController, 
         NavController,
         AlertController, } from 'ionic-angular';

// Pages
import { DiscoverFeaturesPage } from '../discover-features/discover-features';
import { ThankYouPage } from '../thank-you/thank-you';
//import { SignInPage } from '../sign-in/sign-in';
//import { SignUpPage } from '../sign-up/sign-up';
import { PreferencesPage } from '../preferences/preferences';
import { LearnMorePage } from '../learn-more/learn-more';

// Modals
import { LiveInfoModal } from './live-info-modal/live-info-modal';
import { EsriLoaderService } from 'angular-esri-loader';

@Component({
  selector: 'page-live-images',
  templateUrl: 'live-images.html',
  providers: [ EsriLoaderService ]
})
export class LiveImagesPage implements OnInit {

  @ViewChild('map') mapEl: ElementRef;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private esriLoader: EsriLoaderService) {
  }
  
  goToDiscoverFeatures(params){
    if (!params) params = {};
    this.navCtrl.push(DiscoverFeaturesPage);
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
