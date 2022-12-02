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
            password: new FormControl('', [Validators.required]),
        })
        this.formLogin.controls.account.setValue('sonnx@newtel.vn')
        this.formLogin.controls.password.setValue('Newtel@123')
    }

    ngOnInit() {
    }

    login() {
        this.errorsFormLogin = {}
        if(!this.formLogin.valid){
            this.errorsFormLogin = this.validationForm.getMessageError(this.formLogin)
            console.log('this.errorsFormLogin: ', this.errorsFormLogin)
        }else{
            console.log(1234)
            this.loginService.login(this.formLogin).subscribe(data => {
                console.log('data: ', data)
            })
        }
        return
    }
}
