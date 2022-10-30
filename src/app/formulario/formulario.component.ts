import {Component} from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';



@Component({
  selector: 'form-app',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.checkoutForm.value);  // { formularioirst: '', last: '' }
  
  }
}