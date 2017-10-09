import { SignupPage } from './../signup/signup';
import { ParseProvider } from '../../providers/parse';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,AbstractControl,Validators } from "@angular/forms";
import { NavController, NavParams, LoadingController, AlertController } from "ionic-angular";
import { AuthService } from "../../services/auth";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  signinform: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  
  constructor(fb: FormBuilder, private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController, parseProvider: ParseProvider, public navCtrl: NavController, public navParams: NavParams) {
              
              this.signinform = fb.group({
                 'username':  ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
                 'password':  ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(20)])]
              });
              
              this.username = this.signinform.controls['username'];
              this.password = this.signinform.controls['password'];
  }        
 
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  onSignin() {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(this.signinform.value.username, this.signinform.value.password)
      .then(data => {
        loading.dismiss();
        console.log(data);
        this.navCtrl.setRoot (TabsPage);
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
     
  }
}
