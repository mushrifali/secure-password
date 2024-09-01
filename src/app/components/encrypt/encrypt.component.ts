import { Component, OnInit } from '@angular/core';
import { EncrDecrServiceService } from '../../services/encr-decr-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-encrypt',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './encrypt.component.html',
  styleUrl: './encrypt.component.less'
})
export class EncryptComponent implements OnInit {
  
  reactiveForm = new FormGroup({
    password: new FormControl('', Validators.required),
  });

  encryptedPassword = new FormControl('');

  get password() {
    return this.reactiveForm.get('password');
  }
  
  constructor(private encrDecrService: EncrDecrServiceService){}
  
  ngOnInit(): void {
    this.encryptedPassword.disable();
  }

  onSubmit() {
    let formValue: any = this.reactiveForm.value;
    this.encryptedPassword.setValue(this.encrDecrService.encrypt(formValue.password));
  }

}
