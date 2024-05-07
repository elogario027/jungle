import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadpdfService {

  constructor(private http: HttpClient) { }

  downloadPDF(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
