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
    return this.http
      .post("http://localhost:8080/getDataPlayer", dataPN, options)
      .map(res => {
        //On envoie la réponse à login.ts
        return res.json();
      });
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
    return this.http
      .post("http://localhost:8080/getStatsPlayer", dataIS, options)
      .map(res => {
        //On envoie la réponse à login.ts
        return res.json();
      });
  }
}
