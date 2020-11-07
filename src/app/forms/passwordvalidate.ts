import { AbstractControl } from '@angular/forms';

//Password Validation
export function passwordValidation (control: AbstractControl){

  if(control && (control.value != null || control.value != undefined)){

    const confirmPassword = control.value;
    const passwordControl = control.root.get('password');

    if(passwordControl){
      const password = passwordControl.value;

      if(password !== confirmPassword || password === ''){
        return{
          isError: true
        };
      }

    }

  }

  return null;
}
