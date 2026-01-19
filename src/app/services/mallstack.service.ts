import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MallAdmin {
  mallAdminId?: number;
  username: string;
  password?: string;
  email: string;
  loginAttempts?: number;
  isActive?: boolean;
  lastLoginTime?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MallAdminService {

  private baseUrl = 'http://localhost:8081/malladmin';

  constructor(private http: HttpClient) {}

  getAll(): Observable<MallAdmin[]> {
    return this.http.get<MallAdmin[]>(`${this.baseUrl}/all`);
  }

  add(admin: MallAdmin): Observable<MallAdmin> {
    return this.http.post<MallAdmin>(`${this.baseUrl}/add`, admin);
  }

  update(admin: MallAdmin): Observable<MallAdmin> {
    return this.http.put<MallAdmin>(`${this.baseUrl}/update`, admin);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
