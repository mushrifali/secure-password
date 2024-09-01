import { Component } from '@angular/core';
import { EncrDecrServiceService } from '../../services/encr-decr-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-decrypt',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './decrypt.component.html',
  styleUrl: './decrypt.component.less'
})
export class DecryptComponent {

  password = '';
  
  reactiveForm = new FormGroup({
    encryptedPassword: new FormControl('', Validators.required),
  });

  get encryptedPassword() {
    return this.reactiveForm.get('encryptedPassword');
  }
  
  constructor(private encrDecrService: EncrDecrServiceService){}
  
  ngOnInit(): void {
  }

  onSubmit() {
    let formValue: any = this.reactiveForm.value;
    this.password = this.encrDecrService.decrypt(formValue.encryptedPassword);
  }

}
