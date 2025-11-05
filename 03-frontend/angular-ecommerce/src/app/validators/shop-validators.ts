import { FormControl, ValidationErrors } from "@angular/forms";

export class ShopValidators {

    // validacion de espacios en blanco
    static notOnlyWhiteSpace(control: FormControl) : ValidationErrors | null{

        //comprobar que el string solo contenga espacios en blanco
        if((control.value != null) && (control.value.trim().length <= 1)) {

            // invalido, devolver objeto de error
            return { 'notOnlyWhiteSpace': true };
        } else {
            // valido, devolver null
            return null;
        }
    }
}
