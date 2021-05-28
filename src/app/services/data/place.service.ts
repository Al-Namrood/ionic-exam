import { PlaceModel } from '../../models/place.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Network } from '@capacitor/network';
import { Storage } from '@capacitor/Storage';
import { AppModule } from 'src/app/app.module';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private url: string = 'http://localhost:3000/place';

  constructor(public http: HttpClient) {}

  getAll() {
    return new Observable((observer) => {
      Network.getStatus().then((status) => {
        if (status.connected) {
          const observable = this.http.get(this.url);
          observable.subscribe((data) => {
            Storage.set({
              key: 'data',
              value: JSON.stringify(data),
            });

            observer.next(data);
            observer.complete();
          });
        } else {
          Storage.get({ key: 'data' }).then((data) => {
            observer.next(data);
            observer.complete();
          });
        }
      });
    });
  }

  getById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  create(funkoPop: PlaceModel) {
    return this.http.post<PlaceModel>(this.url, funkoPop);
  }

  // update(id) {
  //   return this.http.put(this.url + '/' + id);
  // }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }

  async getNetwork() {
    const status = await Network.getStatus();
    return status;
  }
}
