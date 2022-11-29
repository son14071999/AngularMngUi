import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    env!: any
    formLogin!: any
    errors = []

    constructor(private loginService: LoginService) {
        this.env = environment
        this.formLogin = new FormGroup({
            account: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(5)])
        })
    }

    ngOnInit(): void {
    }

    login() {
        console.log(this.formLogin)
        this.getMessage(this.formLogin)
    }

    getMessage(form: FormGroup): any {
        const fields = form.controls
        let errors!: any
        _.forEach(fields, (val: any, key: any) => {
            if (val.status != 'VALID') {

                let err = Object.keys(errorsField)[0]
                switch(err) {
                    case 'required':
                        errors.key = 'Trường này không được bỏ trống'
                        break
                    case 'email':
                        errors.key = 'Email sai định dạng'
                        break
                    case '' : 
                }
                // _.forEach(val, (field, keyError) => {
                //   console.log('keyError: ', keyError)
                //   console.log('field: ', field)
                //   console.log('--------')
                // })
            }
        })

        return errors
    }

}
