import { AbstractControl } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: AbstractControl) {
    const username = formGroup.get('userName')?.value ?? '';
    const password = formGroup.get('password')?.value ?? '';
  
    if (username.trim() + password.trim()) {
      return username !== password ? null : { senhaIgualUsuario: true };
    } else {
      return null;
    }
  }