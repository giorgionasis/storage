import { Storage } from '@ionic/storage';
import { Injectable, Component } from '@angular/core';
 
@Injectable()
export class Data {
newusers = [];
    
   tmpusers = this.getUsers2().then((data) => {
        this.newusers = data;
        console.log(data);
     }
   )
  //  tmpusers = this.getUsers2();

  constructor(public storage: Storage){
    }
  
    // getUsers2(): Promise<any> {
    //   return this.storage.get('users');
    // }  
  getUsers2() {
  return this.storage.get('users');
 }
 
// setUsers2(users): Promise<any> {
// return this.storage.set('users', users);
//  }
  setUsers2(users){
   this.storage.set('users', users);
 }
  
  
    

}