import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService
    ) { }

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

    if ((!this.fnome) || (!this.femail) || (!this.fsenha) || (!this.fsenhaconfirm)) {
      this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: Algum campo não foi preenchido !!</div>';
      return;
    }
    if (this.fsenha !== this.fsenhaconfirm) {
      this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: Senha não iguais !!</div>';
      return;
    }

      this.userService.createUser(schemaUser).subscribe(res => {
        this.respostaJSON = res;
        this.respostaHTML = '<div class="alert alert-info" role="alert">OK: usuario registrado, agora loga-se !!</div>';
        this.router.navigate(['/painel'])
      }, error => {
        this.respostaJSON = error;
      });

  }

}
