import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../components/model/jwt-dto';
import { LoginUsuario } from '../components/model/login-usuario';
import { NuevoUsuario } from '../components/model/nuevo-usuario';
import { persona } from '../components/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

 public getPersona(): Observable<persona>{
  return this.httpClient.get<persona>(this.URL+ 'traer/perfil');
   
}
}
