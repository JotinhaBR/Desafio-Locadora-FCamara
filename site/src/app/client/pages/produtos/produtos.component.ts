import { Router, ActivatedRoute } from '@angular/router';
import { FilmeService } from './produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public filmeService: FilmeService) { }

  ngOnInit() {

    this.filmeService.buscarFilme({}).subscribe(res => {
      alert(res);
    });

  }

}
