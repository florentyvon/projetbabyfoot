
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the JoingameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameProvider {

  constructor(public http: Http) {
  }

/** FONCTION REJOINDRE UNE PARTIE */
  public joinGame(dataForm){
    
      //Creation d'un header => JSON
      let headers = new Headers(
        {
          'Content-Type' : 'application/json'
        });

      //Creation des options
      let options = new RequestOptions({ headers: headers });

      //Creation des data en JSON 
      let data = JSON.stringify(dataForm);

       //Requete au serveur
       return this.http.post('http://localhost:8080/joingame', data, options)
       //return this.http.post('http://192.168.1.1:8080/joingame', data, options)
       .map( res => {
         //On envoie la réponse à joingame.ts
           return res.json();
       });
  }

/** FONCTION CREATION PARTIE RAPIDE */
  public createSpeedGame(dataGame){

     //Creation d'un header => JSON
     let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });

    //Creation des options
    let options = new RequestOptions({ headers: headers });

    //Creation des data en JSON 
    let data = JSON.stringify(dataGame);

    //Requete au serveur
    return this.http.post('http://localhost:8080/createSpeedGame', data, options)
   // return this.http.post('http://192.168.1.1:8080/createSpeedGame', data, options)
    .map( res => {
      //On envoie la réponse à salonpartie.ts
        return res.json();
    });
  }

  /** FONCTION DIRECT GAME (lancement d'une partie) */

  public directGame(dataGame){

    //Creation d'un header => JSON
    let headers = new Headers(
     {
       'Content-Type' : 'application/json'
     });

   //Creation des options
   let options = new RequestOptions({ headers: headers });

   //Creation des data en JSON 
   let data = JSON.stringify(dataGame);
   
   console.log(dataGame);

   //Requete au serveur (localhost ou serveur local)
   return this.http.post('http://localhost:8080/directGame', data, options)
  // return this.http.post('http://192.168.1.1:8080/directGame', dataGame, options)
   .map( res => {
     //On envoie la réponse à directGame.ts
       return res.json();
   });
 }
}
