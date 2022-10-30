import {Component} from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';

@Component({
  selector: 'form-app',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    address: '',
    email:'',
    cell: '',
    id: '',
  });
  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.checkoutForm.value);  // { formularioirst: '', last: '' }
  
  }
}