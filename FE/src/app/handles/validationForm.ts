import * as _ from 'lodash'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidationForm{
    getMessageError(form: FormGroup) {
        const fields = form.controls
        let errors:any = {}
        _.forEach(fields, (val: any, key: string) => {
            if (val.status != 'VALID') {
                let errs = Object.keys(val.errors)
                Object.assign(errors, {[key]: []})
                _.forEach(errs, (err) => {
                    switch(err) {
                        case 'required':
                            errors[key].push('Trường này không được bỏ trống')
                            break
                        case 'email':
                            errors[key].push('Email sai định dạng')
                            break
                        case 'minlength': 
                            errors[key].push('Số kí tự tối thiểu là ' + val.errors[err].requiredLength)
                            break
                        case 'maxlength': 
                            errors[key].push('Số kí tự tối đa là ' + val.errors[err].requiredLength)
                            break
                        case 'min':
                            errors[key].push('Trường này phải lớn hơn ' + val.errors[err].min)
                            break
                        case 'max':
                            errors[key].push('Trường này phải nhỏ hơn ' + val.errors[err].max)
                            break
                        case 'pattern':
                            errors[key].push('Trường này không đúng định dạng.')
                            break
                        default: 
                            errors[key].push('Dữ liệu không hợp lệ')
                            break
    
                    }
                })
            }
        })
    
        return errors
    }
}

