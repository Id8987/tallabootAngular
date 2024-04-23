import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormBuilder, FormsModule, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormValidationService } from './template-form-validation.service';
import { Candidat } from './Candidat';
import { url } from 'inspector';
@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe, ReactiveFormsModule,],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.css'
})
export class TemplateFormValidationComponent {
  candidatform: any;
  enregistrementEffectue: boolean = false;

  constructor(private formBuilder: FormBuilder, private templateformvalidationService: TemplateFormValidationService) {
    this.candidatform = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      slogan: ['', Validators.required],
      email: ['', Validators.required],
      adressedomicile: ['', Validators.required],
      adressesiege: ['', Validators.required],
      pays: ['', Validators.required],
      region: ['', Validators.required],
      couleur: ['', Validators.required],
      photo: ['', Validators.required],
      url: ['', Validators.required]
    });
  }
  onSubmit() {
    let candidat: Candidat = {
      prenom: this.candidatform.value.prenom || '',
      nom: this.candidatform.value.nom || '',
      slogan: this.candidatform.value.slogan || '',
      email: this.candidatform.value.email || '',
      adressedomicile: this.candidatform.value.adressedomicile || '',
      adressesiege: this.candidatform.value.adressesiege || '',
      pays: this.candidatform.value.pays || '',
      region: this.candidatform.value.region || '',
      couleur: this.candidatform.value.couleur || '',
      photo: this.candidatform.value.photo || '',
      url: this.candidatform.value.url || '',
    };

    console.log('Submitting form with data:', candidat);
    // Appeler le service pour enregistrer les données
    this.templateformvalidationService.chercherInformationUser(candidat).subscribe((response: any) => {
      console.log('API response:', response);
      console.log('Enregistré avec succès');
      this.enregistrementEffectue = true;

      this.candidatform.reset(); // Réinitialiser le formulaire entier après l'enregistrement réussi
      this.masquerMessage();
    }, (error: any) => {
      console.error('API error:', error);
    });
  }
  masquerMessage() {
    setTimeout(() => {
      this.enregistrementEffectue = false;
    }, 10000); // 10 secondes en millisecondes
  }
}
