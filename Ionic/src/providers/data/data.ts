import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DataProvider {
  constructor(public http: Http) {}

  //Fonction de récupération de données joueurs
  public getDataPlayer(dataPlayerName) {
    let headers = new Headers({
      "Content-Type": "application/json"
    });

    let data = { dataPN: dataPlayerName };
    //Transformation string en JSON
    let dataPN = JSON.stringify(data);
    //Creation des options
    let options = new RequestOptions({ headers: headers });
    //Envoi de la requête POST
    return (
      this.http
            .post("http://192.168.1.1:8080/getDataPlayer", dataPN, options)
       // .post("http://localhost:8080/getDataPlayer", dataPN, options)
        .map(res => {
          //On envoie la réponse à login.ts
          return res.json();
        })
    );
  }

  //Fonction pour récupérer les stats d'un joueur
  public getStatsPlayer(dataIDStats) {
    let headers = new Headers({
      "Content-Type": "application/json"
    });

    //Création trame JSON
    let data = { dataIS: dataIDStats };
    //Transformation string en JSON
    let dataIS = JSON.stringify(data);
    //Creation des options
    let options = new RequestOptions({ headers: headers });
    //Envoi de la requête POST
    return (
      this.http
          .post("http://192.168.1.1:8080/getStatsPlayer", dataIS, options)
        //.post("http://localhost:8080/getStatsPlayer", dataIS, options)
        .map(res => {
          //On envoie la réponse à login.ts
          return res.json();
        })
    );
  }

  public bookReservation(reservationData) {
    //Creation d'un header => JSON
    let headers = new Headers({
      "Content-Type": "application/json"
    });

    //Creation des options
    let options = new RequestOptions({ headers: headers });

    //Creation des data en JSON
    let data = JSON.stringify(reservationData);

    //Requete au serveur
    // return this.http.post('http://192.168.1.1:8080/bookReservation', data, options)
    return this.http
   // .post("http://localhost:8080/bookReservation", data, options)
   .post("http://192.168.1.1:8080/bookReservation", data, options)  
   .map(res => {
        //On envoie la réponse à bookingbabyfoot.ts
        return res.json();
      });
  }

  public getMyReservations(userID) {
    let headers = new Headers({
      "Content-Type": "application/json"
    });

    //Création trame JSON
    let data = { dataID: userID };
    //Transformation string en JSON
    let dataID = JSON.stringify(data);
    //Creation des options
    let options = new RequestOptions({ headers: headers });
    //Envoi de la requête POST
    return (
      this.http
      //  .post("http://localhost:8080/getMyReservations", dataID, options)
        .post("http://192.168.1.1:8080/getMyReservations", dataID, options)
        .map(res => {
          //On envoie la réponse à login.ts
          return res.json();
        })
    );
  }

  public DelReservation(ResID) {
    let headers = new Headers({
      "Content-Type": "application/json"
    });

    //Création trame JSON
    let data = { dataID: ResID };
    //Transformation string en JSON
    let dataID = JSON.stringify(data);
    //Creation des options
    let options = new RequestOptions({ headers: headers });
    //Envoi de la requête POST
    return (
      this.http
      // .post("http://localhost:8080/DelReservation", dataID, options)
        .post("http://192.168.1.1:8080/DelReservation", dataID, options)
        .map(res => {
          //On envoie la réponse à login.ts
          return res.json();
        })
    );
  }
}
