import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() { }

  getCreditCardMonths(startMonth: number) : Observable<number[]>{
    let data: number[] = [];

    // build an array for "Month" dropdown FileList
    //  start at current month and loop until

    for(let theMonth = startMonth; theMonth <= 12; theMonth++){
      data.push(theMonth);
    }
    return of(data);
  }
}
