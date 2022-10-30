import {Component} from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';

@Component({
  selector: 'form-app',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  dataUsuario: any = [];
  checkoutForm = this.formBuilder.group({
    nombre: '',
    apellido: '',
    direccion: '',
    correo:'',
    celular: '',
    identificacion: '',
  });
  constructor(private formBuilder: FormBuilder) { }
  //style="background:url(https://cdn.wallpapersafari.com/54/23/oSfm2X.jpg);"
  onSubmit() {
    this.dataUsuario.push(this.checkoutForm.value)
    console.log(this.dataUsuario);  // { formularioirst: '', last: '' }
    this.checkoutForm.reset()
  }
}