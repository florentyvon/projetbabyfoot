import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DataProvider {

  constructor(public http: Http) {
  }

  //Fonction de récupération de données joueurs
  public getDataPlayer(dataPlayerName) {


    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });


    let data = { "dataPN" : dataPlayerName}
    let dataPN = JSON.stringify(data);
    //Creation des options
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8080/getDataPlayer', dataPN, options)
    .map(res => {
      //On envoie la réponse à login.ts
      return res.json();
    });
  }

  public getStatsPlayer(dataIDStats) {


    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });


    let data = { "dataIS" : dataIDStats}
    let dataIS = JSON.stringify(data);
    //Creation des options
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8080/getStatsPlayer', dataIS, options)
    .map(res => {
      //On envoie la réponse à login.ts
      return res.json();
    });
  }



}
