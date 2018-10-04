import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilmeService {
  constructor(private http: HttpClient) {}

  createFilme(json): Observable<any> {
    return this.http.post('http://localhost:3000/produto/create', json);
  }

  buscarFilme(json): Observable<any> {
    return this.http.get('http://localhost:3000/filme/find', json);
  }

  deleteFilme(json): Observable<any> {
   return this.http.delete('http://localhost:3000/produto/deletar', json);
  }
}