import { Component } from '@angular/core';

export class localData {
    
    setUsers (users){
        window.localStorage.users_data = JSON.stringify(users);
    }
    getUsers(){
       return JSON.parse(window.localStorage.users_data || '[]');
    }

    tmpusers = this.getUsers();
    constructor(){
        this.tmpusers.sort(function(a, b) {
            var nameA = a.username.toUpperCase(); // ignore upper and lowercase
            var nameB = b.username.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
                      
            return 0;
          });
    }
    

}    

