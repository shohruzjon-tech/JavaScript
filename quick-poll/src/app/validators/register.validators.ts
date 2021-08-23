import { AbstractControl } from "@angular/forms";

export  function UsernameValidator(control:AbstractControl) :{[key:string]:string}|null{
      const validator:RegExp = /^[a-z]{1,}\w{3,}/g
      const username:string = control.value
      const valid:boolean =validator.test(username);
      return valid ? null : {username:'Username must start with a lower case'};
}
export  function EmailValidator(control:AbstractControl) :{[key:string]:boolean}|null{
      const validator:RegExp = /^[a-z]{1,}\w{3,}@\w{2,}\.\w{2,}/g
      const email:string = control.value
      const valid:boolean =validator.test(email);
      return valid ? null : {email:true};
}
export  function PasswordValidator(control:AbstractControl) :{[key:string]:string}|null{
      const validator:RegExp[] = [/([a-z]+)/,/([A-Z]+)/,/(\d+)/,/([^a-zA-Z\d\s]+)/,/.{8,}/]
      const errors: string[] = [
            'Must Contain a Lowercase Letter',
            'Must Contain an Uppercase Leter',
            'Must Contain a Number',
            'Must Contain a non-alphabetic letter',
            'Password\'s length must be more than 7'
      ]
      const pass:string = control.value
      const valid:boolean[] = validator
      .map(rex=>rex.test(pass));
      return valid.reduce((valid,accumulator)=> valid&&accumulator) ? null : {password:errors[valid.indexOf(false)]};
}
