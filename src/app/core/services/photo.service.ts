import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {unsplashAPI} from '../globals/unsplash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private unsplashUrl;
  private unsplashId;

  constructor( private httpClient:HttpClient) {
    this.unsplashUrl=unsplashAPI.url;
    this.unsplashId=unsplashAPI.clientId;
   }


   getPhotos():Observable<any>{
      let param=new HttpParams();
      param=param.append('client_id',this.unsplashId);
      param=param.append('orientation','landscape');
      return this.httpClient.get(this.unsplashUrl,{params:param});
  }
}
