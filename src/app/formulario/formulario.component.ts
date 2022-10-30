import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'example-app',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  onSubmit(formulario: NgForm) {
    console.log(formulario.value);  // { formularioirst: '', last: '' }
    console.log(formulario.valid);  // false
  }
}