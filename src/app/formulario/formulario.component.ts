import {Component} from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';

@Component({
  selector: 'form-app',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  usersdata: any = [];
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    address: '',
    email:'',
    cellphone: '',
    identification: '',
  });
  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    this.usersdata.push(this.checkoutForm.value)
    console.log(this.usersdata); 
    this.checkoutForm.reset()  
  }
}