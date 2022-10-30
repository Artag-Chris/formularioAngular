import {Component} from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';

@Component({
  selector: 'form-app',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  checkoutForm = this.formBuilder.group({
    nombre: '',
    apellido: '',
    direccion: '',
    correo:'',
    celular: '',
    identificacion: '',
  });
  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.checkoutForm.value);  // { formularioirst: '', last: '' }
  
  }
}