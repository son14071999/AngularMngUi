import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash'
import { ValidationForm } from '../../../handles/validationForm'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    env!: any
    formLogin!: any

    errorsFormLogin!: any
    constructor(private validationForm: ValidationForm,
            private loginService: LoginService
        ) {
        this.env = environment
        this.formLogin = new FormGroup({
            account: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required, Validators.min(10)]),
        })
        this.formLogin.controls.account.setValue('data test')
    }

    ngOnInit() {
    }

    login() {
        if(!this.formLogin.valid){
            this.errorsFormLogin = this.validationForm.getMessageError(this.formLogin)
        }
    }
}
