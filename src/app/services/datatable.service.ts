import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { User } from '../../models/user';

@Injectable()
export class DatatableService {
  // public userData: Array<User> = [
  //   {
  //     id: 1,
  //     name: 'Sarah',
  //     instagram: '@daydreamsonvinyl',
  //     instagramUrl: 'https://www.instagram.com/daydreamsonvinyl/'
  //   },
  //   {
  //     id: 2,
  //     name: 'Gabriele',
  //     instagram: '@ilbesozzi',
  //     instagramUrl: 'https://www.instagram.com/ilbesozzi/'
  //   },
  //   {
  //     id: 3,
  //     name: 'Laura',
  //     instagram: '@laurashull',
  //     instagramUrl: 'https://www.instagram.com/laurashull/'
  //   }
  // ];

  constructor(
    private _http: Http
  ) { }

  public getUsers() {
    //return this.userData;

    return this._http.get('../../data.json')
      .map(response => {
        return response.json();
      });
  }

}
