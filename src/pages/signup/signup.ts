import { SigninPage } from './../signin/signin';
import { TabsPage } from './../tabs/tabs';
import { ParseProvider } from '../../providers/parse';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,AbstractControl,Validators } from "@angular/forms";
import { LoadingController, AlertController, NavController } from "ionic-angular";
import { AuthService } from "../../services/auth";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
      
  signupform: FormGroup;
  username: AbstractControl;
  displayname: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  confirmpassword: AbstractControl;

  constructor(fb: FormBuilder, private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController, public navCtrl: NavController) {
              
              function matchingPasswords(passwordkey: string, confirmpasswordKey: string) {
                return (group: FormGroup): {[key: string]: any} => {
                  let password = group.controls[passwordkey];
                  let confirmpassword = group.controls[confirmpasswordKey];
                
                  if (password.value !== confirmpassword.value) {
                     return {
                       mismatchedPasswords: true
                    };
                  }
                 }
                }

              this.signupform = fb.group({
                'username':  ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
                'displayname':  ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
                'email':  ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
                'password':  ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(20)])],
                'confirmpassword': ['', Validators.required]
                  
               }, {validator: matchingPasswords('password', 'confirmpassword')})
                           
               this.username = this.signupform.controls['username'];
               this.displayname = this.signupform.controls['displayname'];
               this.email = this.signupform.controls['email'];
               this.password = this.signupform.controls['password'];  
               this.confirmpassword = this.signupform.controls['confirmpassword'];  
  }
  
  onSignup() {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.signup(this.signupform.value.username, this.signupform.value.displayname, this.signupform.value.email, this.signupform.value.password)
      .then(data => {
        console.log(data);
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup success!',
          message: 'A link has been sent to your email to verify your account ',
          buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.setRoot (SigninPage);
        })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });

  }
}
