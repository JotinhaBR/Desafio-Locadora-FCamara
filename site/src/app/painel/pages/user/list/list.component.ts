import { Component, OnInit } from '@angular/core';
var $  = require( 'jquery' );
require( 'datatables.net-bs4' );

@Component({
  selector: 'painel-page-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PainelUserListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.AtivarDataTable();
  }

  AtivarDataTable(){
    $(document).ready(function() {
      $('#Tabela').DataTable({
            responsive: true,
            order: [0, "desc"]
      });
    });
}

}
