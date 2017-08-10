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
  templateUrl: 'discover-features.html'
})
export class DiscoverFeaturesPage {

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              public modalCtrl: ModalController) { 
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
    }
}

// ESRI
@Component({
  selector: 'discover-features',
  templateUrl: 'discover-features.html',
  providers: [ EsriLoaderService ]
})
export class HomePage implements OnInit{

  @ViewChild('map') mapEl: ElementRef;

  constructor(public navCtrl: NavController, private esriLoader: EsriLoaderService) { }

  ngOnInit() {

    let latitude: number = 0, longitude: number = 0, map: any = null, MapPoint: any = null;

    const options = {
      enableHighAccuracy: true, // use any allowed location provider
      timeout: 60000            // it can take quite a while for a cold GPS to warm up
    };

    // Demonstrates starting up geolocation before loading ArcGIS JS API
    // You can also wait until after the map has loaded. It all depends
    // on your requirements.

    let watchId = navigator.geolocation.watchPosition( position=> {

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        centerMap(latitude, longitude);

      }, error => {

        switch(error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            alert("Unable to start geolocation. Check application settings.");
            break;
        }
      }, options
    );

    this.esriLoader.load({
      url: 'https://js.arcgis.com/3.20/'
    }).then(() => {

      this.esriLoader.loadModules(['esri/map', 'esri/geometry/Point']).then(([Map, Point]) => {
        // create the map at the DOM element in this component
        map = new Map(this.mapEl.nativeElement, {
          center: [-118, 34.5],
          zoom: 8,
          basemap: "topo"
        });

        MapPoint = Point;

        // Shut off geolocation when user zooms.
        map.on("zoom-end",function(){
          navigator.geolocation.clearWatch(watchId);
          console.log("Geolocation stopped.");
        });

      });
    });

    // Keep centering the map until we shut off geolocation
    function centerMap(lat, lon) {
      if(map != null) {
        console.log("Centering map: " + lat + ", " + lon);
        map.centerAt(MapPoint(lon, lat));
      }
    }
  }
}
