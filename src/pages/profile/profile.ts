import { SigninPage } from './../signin/signin';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthService} from '../../services/auth';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController,  public authService: AuthService, public app: App) {

  }

  onLogout() {
    this.authService.logout();
    //this.navCtrl.setRoot(SigninPage);
    //this.navCtrl.rootNav.setRoot(SigninPage);
    this.app.getRootNav().setRoot(SigninPage);
  }

}



