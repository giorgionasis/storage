// import { Parse } from 'parse';
// import { Component } from '@angular/core';

// export class Users {
   
//     currentUser = Parse.User.current();
//     query1 = new Parse.Query('Friends');
//     friendQuery = new Parse.Query('Friends');
//     query = new Parse.Query(Parse.User);
//     items: any;
//     users: any;

//     constructor () {
//         this.query.find().map(res => res.json()).subscribe(data => {
//             this.items = data; 
//             this.initializeItems();
//         })
               
//     }
//     initializeItems() {
//         this.users = this.items;
//       }

//     getItems(ev: any) {
//         // Reset items back to all of the items
//         this.initializeItems();
    
//         // set val to the value of the searchbar
//         let val = ev.target.value;
    
//         // if the value is an empty string don't filter the items
//         if (val && val.trim() != '') {
//           this.users = this.users.filter((item) => {
//             return (item.storeName.toLowerCase().indexOf(val.toLowerCase()) > -1);
//           })
//         }
//       }
    
//    // loadUsersSuccess(userItems,friendItems){
//     //  lclDataSrv.setUsers(this.friends);
//    // }    
    
//    //searchfriends(user) {
//    // this.friendQuery = new Parse.Query.or(this.query1.equalTo('fromUser',Parse.User.current()),this.query1.equalTo('toUser',Parse.User.current()));
//    // this.query.find().then (data => {
       
//     //    console.log(data);
        
//     //  })
        
//    }
  