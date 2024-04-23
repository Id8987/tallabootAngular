import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Candidat } from './Candidat';
@Injectable({
  providedIn: 'root'
})
// couleur: this.candidatform.value.couleur || '',
// photo: this.candidatform.value.photo || '',
// url: this.candidatform.value.url || '',
export class TemplateFormValidationService {
  constructor(private http: HttpClient) { }
  url: string = 'https://iacademy2.oracle.com/ords/sn_a419_plsql_s57/api_parrainage/candidats/';
  chercherInformationUser(information: Candidat): Observable<any> {
    return this.http.post<any>(this.url, {
      prenom: information.prenom,
      nom: information.nom,
      slogan: information.slogan,
      email: information.email,
      adressedomicile: information.adressedomicile,
      adressesiege: information.adressesiege,
      pays: information.pays,
      region: information.region,
      couleur: information.couleur,
      photo: information.photo,
      url: information.url
    });
  }


}
