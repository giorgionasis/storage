import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import 'rxjs/add/operator/map';

@Injectable()
export class ParseProvider {
  private parseAppId: string = "LYROpIXhWP0R5w8X9FmuB6qrcqbFSJ3mWJzIZ9bc";
  private parseServerUrl: string = "http://79.143.182.150:1337/parse/";

  constructor() {
    this.parseInitialize();
    console.log('Initiated Parse');
    }
      
  parseInitialize(){
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
  }
}