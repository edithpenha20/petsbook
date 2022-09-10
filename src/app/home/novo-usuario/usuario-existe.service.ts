import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(
    private novoUsuarioService: NovoUsuarioService
  ) { }

  usuarioJaExite() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }

  // usuarioJaExiste(){
  //   return (control: AbstractControl) => {
  //     return control.valueChanges.pipe(
  //       debounceTime(300)
  //     ).pipe(
  //       switchMap((nomeUsuario) => 
  //         this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
  //       )
  //     ).pipe(
  //       map( (usuarioExistente) => 
  //         usuarioExistente ? { usuarioExistente: true }: null 
  //       )
  //     ).pipe(
  //       first()
  //     )
  //   }
  // }
}
