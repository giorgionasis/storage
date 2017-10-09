import { Data } from './../services/data';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ParseProvider } from '../providers/parse';
import { FeedPage } from '../pages/feed/feed';
import { SearchPage } from '../pages/search/search';
import { MeetPage } from '../pages/meet/meet';
import { ActivityPage } from '../pages/activity/activity';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";
import { localData } from './../services/local';
import { IonicStorageModule } from '@ionic/storage';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    SearchPage,
    MeetPage,
    ActivityPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    SearchPage,
    MeetPage,
    ActivityPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Data,
    SplashScreen,
    ParseProvider,
    AuthService,
    localData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
