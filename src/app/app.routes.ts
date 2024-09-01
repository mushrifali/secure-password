import { Routes } from '@angular/router';
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { DecryptComponent } from './components/decrypt/decrypt.component';

export const routes: Routes = [
    {path: 'encrypt', component: EncryptComponent},
    {path: 'decrypt', component: DecryptComponent} 
];
