import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'client-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class ClientHomeComponent implements OnInit {
  
  id: string;
  

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
