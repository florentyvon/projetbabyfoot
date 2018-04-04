import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';

import { AuthentificationProvider } from '../../providers/authentification/authentification';
import { HomePage } from '../home/home';
import{ HomeBfPage } from '../home-bf/home-bf'
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //Variables Globales
  loading : Loading;
  createSuccess = false;

  submitSignin: boolean = false;
  submitSignup: boolean = false;
  MatchPassword : boolean = true;

  SigninForm: FormGroup;
  SignupForm: FormGroup;

  signindata = {pseudo_signin: '',password_signin : '' };
  signupdata = {pseudo_signup: '',password_signup : '', password_verif_signup: '',mail_signup : '' }


  constructor(private nav: NavController, private auth: AuthentificationProvider, public formBuilder: FormBuilder, private alertCtrl: AlertController, private loadingCtrl: LoadingController,private toastCtrl: ToastController) {

    //Instanciation du formulaire de connection 
    this.SigninForm = formBuilder.group({
      //Variable pseudo_signin : longueur entre 3 et 16 caracteres, contenant des chiffres / lettres / point / tiret / underscore
      pseudo_signin: ['', Validators.compose([, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('[a-zA-Z0-9._-]{3,16}'), Validators.required])],
      //variable password_signin : longueur entre 6 et 32 caractères
      password_signin: ['', Validators.compose([Validators.minLength(6),Validators.maxLength(32), Validators.required])]
    });

    //Instanciation du formulaire de creation de compte
    this.SignupForm = formBuilder.group({
      //Variable pseudo_signup : longueur entre 3 et 16 caracteres, contenant des chiffres / lettres / point / tiret / underscore
      pseudo_signup: ['', Validators.compose([, Validators.minLength(3), Validators.maxLength(16), Validators.pattern('[a-zA-Z0-9._-]{3,16}'), Validators.required])],
      //variable password_signup : longueur entre 6 et 32 caractères, contient au moins une minuscule, une majuscule et un chiffre
      password_signup: ['', Validators.compose([, Validators.minLength(6), Validators.maxLength(30), Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})'), Validators.required])],
      password_verify_signup:  ['', Validators.required],
      //variable mail_signup valide
      mail_signup: ['', Validators.compose([, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$'), Validators.required])],
    },
    //Verification des mots de passes
    {validator: this.areEqual('password_signup','password_verify_signup')});      



  }

/** FONCTION COMPARAISON DES MOTS DE PASSE ENTREES */
  areEqual(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        this.MatchPassword = false;
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          this.MatchPassword = true;
          return passwordConfirmationInput.setErrors(null);
      }
    }
 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage'); 
  }

/** FONCTION DE CONNECTION  */
  signin(): void{

    //this.showLoading();
    this.submitSignin = true;

    //Si le formulaire est bien remplit
    if(this.SigninForm.valid){

    //On recupère les données du formulaire
    this.signindata =  this.SigninForm.value;
    
    //On appelle la fonction signin du provider authentification (Providers/authentification)   
    this.auth.signin(this.signindata).subscribe(success => {
     
      console.log(success);
      //Si connection OK et que c'est un compte Joueur
      if (success === 'OKjoueur') {

        //On enregistre dans une variable local l'utilisateur connecté
        window.localStorage.setItem('userConnected', this.signindata.pseudo_signin);
        //On enregistre dans une variable local le type de compte
        window.localStorage.setItem('typeAccount', 'joueur');

        this.createSuccess = true;
        this.showToast("Connection réussie");
        this.nav.setRoot(HomePage);
      //Sinon
      } else {
        if (success === 'OKbabyfoot') {
          //On enregistre dans une variable local l'utilisateur connecté
          window.localStorage.setItem('userConnected', this.signindata.pseudo_signin);
          //On enregistre dans une variable local le type de compte
          window.localStorage.setItem('typeAccount', 'babyfoot');

          console.log(window.localStorage.getItem('typeAccount'));
          console.log(success);

          this.createSuccess = true;
          this.showToast("Connection réussie");
          this.nav.setRoot(HomeBfPage);
        }else{
          this.showPopup("Accès refusé", 'Pseudo et mot de passe invalide');
        }
        
      }
    },
      error => {
        this.showPopup("Error", error);
      });
    }
  }

  /** FONCTION CREATION DE COMPTE */
  signup(): void{

    this.submitSignup = true;

   
    //Si le formulaire est bien remplit
    if(this.SignupForm.valid){

      //On recupère les données du formulaire
      this.signupdata =  this.SignupForm.value;

    
    //On appelle la fonction signup du provider authentification (Providers/authentification)   
    this.auth.signup(this.signupdata).subscribe(success => {
      
      console.log(success);
      //Si creation de compte OK
      if (success === 'OK') {

        //On enregistre dans une variable local l'utilisateur connecté
        window.localStorage.setItem('userConnected', this.signupdata.pseudo_signup);
        //Type de compte = joueur
        window.localStorage.setItem('typeAccount', 'joueur');

        this.createSuccess = true;
        this.showPopup("Succès", "Votre compte a été créé");
        this.nav.setRoot(HomePage);
      //Sinon
      } else {
        this.showPopup("Erreur", 'Compte déjà existant (pseudo ou adresse mail)');
      }
    },
      error => {
        this.showPopup("Error", error);
      });
    }
  }

  /** FONCTION AFFICHER ERREURS */
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  /** FONCTION AFFICHER POP-UP */
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  
  /** AFFICHER DES TOASTS */
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
