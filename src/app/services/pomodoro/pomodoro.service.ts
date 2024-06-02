import { Injectable } from '@angular/core';
import { type Observable, Subject, timer, takeUntil, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {

  private status$ = new Subject<boolean>();
  private timer$ = new Subject<number>();
  private counter$ = new Subject<number>();
  private counter = 0;

  private countdownTimer = new Subscription();
  private countdownDuration: number = 25 * 60;

  startTimer(): void {
    this.stopTimer()
    this.status$.next(true);

    this.countdownTimer = timer(0, 1000)
      .pipe(takeUntil(this.status$))
      .subscribe(() => {


        if (this.countdownDuration <= 0) {
          this.stopTimer();
          this.counter++;
          this.counter$.next(this.counter);
        } else {
          this.countdownDuration--;
          this.timer$.next(this.countdownDuration);
        }
      });
  }

  stopTimer(): void {
    if (this.countdownTimer) {
      this.countdownTimer.unsubscribe();
      this.status$.next(false);
    }
  }

  resetTimer(): void {
    this.stopTimer();
    this.countdownDuration = 25 * 60;
    this.timer$.next(this.countdownDuration);
  }

  getTimer(): Observable<number> {
    return this.timer$.asObservable();
  }

  getTimerStatus(): Observable<boolean> {
    return this.status$.asObservable();
  }

  getCounter(): Observable<number> {
    return this.counter$.asObservable();
  }
}
