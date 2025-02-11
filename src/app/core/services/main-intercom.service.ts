import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainIntercomService {
  categoriesList: Array<string> = [];
  userObj = {
    username : ""
  }

  constructor() { }
}
