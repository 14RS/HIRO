// Framework
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DiscoverFeaturesPage } from '../pages/discover-features/discover-features';
import { LiveImagesPage } from '../pages/live-images/live-images';
import { ThankYouPage } from '../pages/thank-you/thank-you';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AboutUsPage } from '../pages/about-us/about-us';
import { PreferencesPage } from '../pages/preferences/preferences';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LearnMorePage } from '../pages/learn-more/learn-more';

// Modals
import { DiscoverInfoModal } from '../pages/discover-features/discover-info-modal/discover-info-modal';
import { LiveInfoModal } from '../pages/live-images/live-info-modal/live-info-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoverFeaturesPage,
    LiveImagesPage,
    ThankYouPage,
    SignInPage,
    SignUpPage,
    AboutUsPage,
    PreferencesPage,
    TutorialPage,
    LearnMorePage,
    DiscoverInfoModal,
    LiveInfoModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiscoverFeaturesPage,
    LiveImagesPage,
    ThankYouPage,
    SignInPage,
    SignUpPage,
    AboutUsPage,
    PreferencesPage,
    TutorialPage,
    LearnMorePage,
    DiscoverInfoModal,
    LiveInfoModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}