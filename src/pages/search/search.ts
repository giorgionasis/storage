import { Data } from './../../services/data';
import { localData } from './../../services/local';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Parse } from 'parse';
import 'rxjs/add/operator/map';
import {User} from '../../models/User';
import 'rxjs/add/operator/debounceTime';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  
})

export class SearchPage {
  currentUser = Parse.User.current();
  query1 = new Parse.Query('Friends');
  friendQuery = new Parse.Query('Friends');
  query = new Parse.Query(Parse.User);
  tmp =[];
  users: any= [];
  user: any =[];  

  initializeItems() {
  //this.users = this.localdata.tmpusers;
    this.users = this.dataService.newusers;
    }

    // retrieveUsers(){
    //   if (this.currentUser= Parse.User.current()) {
    //     Parse.Cloud.run('UserQuery').then(
    //     res => {
    //       console.log('user query')
    //       this.tmp = JSON.stringify(res);
    //       //this.tmp = res;
    //       console.log(this.tmp);
    //       this.dataService.setUsers2(this.tmp).then(()=>{
    //           this.dataService.getUsers2().then((val)=>{
    //            this.users = val;
    //             console.log(this.users);
    //             console.log(this.dataService.tmpusers)
    //         });
      
    //        });
    //      });
    //     }
    //    }

   retrieveUsers(){
   if (this.currentUser= Parse.User.current()) {
     Parse.Cloud.run('UserQuery').then(
     res => {
       console.log('user query')
      // this.tmp = res;
       this.tmp = res;
       console.log(this.tmp);
       //this.localdata.setUsers(this.tmp);
       this.dataService.setUsers2('users');
    // this.users = this.localdata.tmpusers;
     this.users = this.dataService.newusers;
       console.log(this.users);

      });
    }
   }

 retrieveFriends(){
    if (this.currentUser= Parse.User.current()) {
      Parse.Cloud.run('FriendsQuery', {currentuser: 'fEjQgAPvDO'}).then(
      res => {
        console.log(res)
        }
      )
    }
   }
 
  constructor(public navCtrl: NavController, private localdata: localData, private dataService: Data) {
      this.searchControl = new FormControl;
  }
  
  showUsers: any = false;
  searchControl: FormControl;
  searchTerm: string = '';
  searching: any = false;
  
  filterusers(searchTerm){ 
        return this.users.filter((user) => {
            return user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
     }

  ionViewDidLoad() {
    this.retrieveFriends();
    this.retrieveUsers();
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
       });
  }

  onSearchInput(){
    this.searching = true;
    //this code is to hide users until input is triggered
    //if (this.searchTerm.length >=1)
   // return this.showUsers= true;
   // else {
   //   return this.showUsers = false;
   // }
    //end of code
  }

  setFilteredItems() {
    this.initializeItems();
    this.users = this.filterusers(this.searchTerm);
  }  
  
  onCancel(ev: any) {
    this.initializeItems();
  }

  //searchfriends() {
   // this.friendQuery = new Parse.Query.or(this.query1.equalTo('fromUser',Parse.User.current()),this.query1.equalTo('toUser',Parse.User.current()));
    //let users = this.query.find();
    //return this.users;
  //}
}