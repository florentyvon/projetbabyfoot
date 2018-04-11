import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/**Provider Authentification */
/**Envoie des requètes au serveur pour l'authentification (signin / signup / logout)*/
@Injectable()
export class AuthentificationProvider {

  constructor(public http: Http) {
  }

  //Fonction signin qui recoit en parametre le pseudo + mot de passe
  public signin(signindata) {

    //Creation d'un header => JSON
    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });

    //Creation des options
    let options = new RequestOptions({ headers: headers });

    //Creation des data en JSON 
    let data = JSON.stringify(signindata);

    //Requete au serveur
    return this.http.post('http://192.168.1.1:8080/signin', data, options)
   //return this.http.post('http://localhost:8080/signin', data, options)
      .map(res => {
        //On envoie la réponse à login.ts
        return res.json();
      });
  }

  //Fonction signup qui recoit en parametre les données de création de compte
  public signup(signupdata) {

    //Creation d'un header => JSON
    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });

    //Creation des options
    let options = new RequestOptions({ headers: headers });

    //Creation des data en JSON 
    let data = JSON.stringify(signupdata);

    //Requete au serveur
    return this.http.post('http://192.168.1.1:8080/signup', data, options)
   //return this.http.post('http://localhost:8080/signup', data, options)
      .map(res => {
        //On envoie la réponse à login.ts
        return res.json();
      });

  }

  public logout(userdata) {

    //Creation d'un header => JSON
    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });

    //Creation des options
    let options = new RequestOptions({ headers: headers });

    //Creation des data en JSON 
    let data = JSON.stringify(userdata);

    //Requete au serveur
    //    return new Promise((resolve, reject) => {
      this.http.post('http://192.168.1.1:8080/logout', data, options)
  //this.http.post('http://localhost:8080/logout', data, options)
      .toPromise()
      .then((response) => {
        console.log('API Response : ', response.json());

      })
      .catch((error) => {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));

      });

    //test sans backend 
    return Observable.create(observer => {
      //   this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}