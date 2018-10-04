import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {

  }

  // div para alertas
  respostaHTML: any;

  // form register inputs
  frnome: string;
  fremail: string;
  frsenha: string;
  frsenhaconfirm: string;

  // form login inputs
  flemail: string;
  flsenha: string;

  // função do form de login
  loginClickOn() {
    var schemaLogin = {
      email: this.flemail,
      senha: this.flsenha
    };

    this.respostaHTML = '<div class="alert alert-info" role="alert">Carregando...</div>';

    this.userService.loginUser(schemaLogin).subscribe(res => {
      if (res['motivo']) {
        this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: ' + res['motivo'] + '</div>';
      } else
        if (!res[0]['token']) {
          this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: token bugado, registre novamente.</div>';
        } else {

          this.respostaHTML = '<div class="alert alert-info" role="alert">OK: logando...</div>';
          this.router.navigate(['/']);

        }
    }, error => {
      this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: ' + error + '.</div>';
    });

  }


  // função form register
  registerClickOn() {
    var varToken = Md5.hashAsciiStr("" + Math.floor((Math.random() * 9999) + 1));
    var schemaRegister = {
      nome: this.frnome,
      email: this.fremail,
      senha: this.frsenha,
      grupo: "USUARIO",
      token: varToken
    };

    ///////////////////////////////////////////////////////////////////
    if( this.fremail=="" || this.fremail.indexOf('@')==-1 || this.fremail.indexOf('.')==-1 )
    {
         this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: Email Incorreto !!</div>'
         return;
    }
    //////////////////////////////////////////////////////////////////

    this.respostaHTML = '<div class="alert alert-info" role="alert">Carregando...</div>';

    if ((!this.frnome) || (!this.fremail) || (!this.frsenha) || (!this.frsenhaconfirm)) {
      this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: Algum campo não foi preenchido !!</div>';
      return;
    }
    if (this.frsenha !== this.frsenhaconfirm) {
      this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: Senha não iguais !!</div>';
      return;
    }



    this.userService.createUser(schemaRegister).subscribe(res => {
      this.respostaHTML = '<div class="alert alert-info" role="alert">OK: usuario registrado, agora loga-se !!</div>';
      //this.router.navigate(['/user/login'])
      this.frnome = ""
      this.fremail = "";
      this.frsenha = "";
      this.frsenhaconfirm = "";

    }, error => {
      this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: ' + error + '.</div>';
    });

  }

}
