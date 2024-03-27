import { Injectable } from '@angular/core';
import { Subject, bufferCount, from, fromEvent, map, mergeMap, sequenceEqual } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KonamiService {

  public konami$ = new Subject<number>()
  private counter = 0

  constructor() {

    const codes = from([
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'KeyB',
      'KeyA',
      'Enter', // no start key, clearly.
    ]);

    const keys = fromEvent<KeyboardEvent>(document, 'keyup').pipe(map(e => e.code));
    const matches = keys.pipe(
      bufferCount(11, 1),
      mergeMap(last11 => from(last11).pipe(sequenceEqual(codes)))
    );
    matches.subscribe((matched) => {
      if (matched) {
        this.counter++
        this.konami$.next(this.counter)
      }
    });
  }

  getKonami() {
    return this.konami$.asObservable()
  }
}
