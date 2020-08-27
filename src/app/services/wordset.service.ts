import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Wordset } from '../shared/wordset';
import {HttpClient} from '@angular/common/http';
import {BaseURL} from '../baseurls/baseurls';

@Injectable({
  providedIn: 'root'
})
export class WordsetService {

  constructor(private http: HttpClient) { }

  getAllWordsets(): Observable<Wordset[]> {
  	return this.http.get<Wordset[]>(BaseURL + 'wordsets');
  }

  getRandomWordset(): Observable<Wordset> {
	return this.getAllWordsets()
		.pipe(map(items => {
			let len = items.length;
			return items[Math.floor(Math.random() * len)];
		}));
  }

  getWordsetById(id: string): Observable<Wordset> {
  	return this.getAllWordsets().pipe(map(items => items[id]));
  }

}
