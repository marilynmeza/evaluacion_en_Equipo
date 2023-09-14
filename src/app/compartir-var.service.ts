import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirVarService {

  sharedVariable: any = null;

  setSharedVariable(value: any) {
    this.sharedVariable = value;
  }

  getSharedVariable() {
    return this.sharedVariable;
  }

  constructor() { }

}