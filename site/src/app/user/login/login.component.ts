import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {

  }

  respostaJSON: any[] = [];
  respostaHTML: any;

  // form inputs
  fnome: string;
  femail: string;
  fsenha: string;
  fsenhaconfirm: string;

  registerClickOn() {
    var schemaUser = {
      nome: this.fnome,
      email: this.femail,
      senha: this.fsenha
    };

    this.respostaHTML = '<div class="alert alert-info" role="alert">Carregando...</div>';

    if (this.fsenha !== this.fsenhaconfirm) {
      this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: Senha não iguais !!</div>';
      setTimeout(function(){ this.respostaHTML = ''; }, 2000);
      return;
    }

      this.userService.createUser(schemaUser).subscribe(res => {
        this.respostaJSON = res;
        this.respostaHTML = '<div class="alert alert-info" role="alert">OK: usuario registrado, agora loga-se !!</div>';
        setTimeout(function(){ this.respostaHTML = ''; }, 2000);
      }, error => {
        this.respostaJSON = error;
      });

  }

}
