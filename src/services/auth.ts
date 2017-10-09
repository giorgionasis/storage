import parse from 'parse';
import { ParseProvider } from "../providers/parse";

export class AuthService {


  signup(username: string, displayname: string, email: string, password: string) {
   
   var user = new parse.User();
   user.set("username", username);
   user.set("name", displayname);
   user.set("email", email);
   user.set("password", password);
   return user.signUp ();
  }

  signin(username: string, password: string) {
    return parse.User.logIn(username,password);
    
  }

  logout() {
    return parse.User.logOut();
  }

 // getActiveUser() {
 //   return firebase.auth().currentUser;
 // }
}
