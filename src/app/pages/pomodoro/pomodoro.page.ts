import {
  Component,
  type OnInit,
  type WritableSignal,
  inject,
  signal
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PomodoroService } from '@app/services/pomodoro/pomodoro.service';
import { KonamiService } from '@app/services/konami/konami.service';

@Component({
  selector: 'nn-pomodoro',
  standalone: true,
  imports: [],
  templateUrl: './pomodoro.page.html',
  styleUrl: './pomodoro.page.scss'
})
export class PomodoroPage implements OnInit {
  private pomodoroService = inject(PomodoroService);
  private titleService = inject(Title);
  private konamiService = inject(KonamiService);

  timerDisplay: WritableSignal<string> = signal('25:00');
  timerStatus: WritableSignal<boolean> = signal(false);
  counterDisplay: WritableSignal<string> = signal('000');

  ngOnInit(): void {
    this.pomodoroService.getTimer().subscribe((duration) => {
      const minutes = Math.floor(duration / 60)
        .toString()
        .padStart(2, '0');
      const seconds = (duration % 60).toString().padStart(2, '0');
      this.timerDisplay.set(`${minutes}:${seconds}`);
      this.titleService.setTitle(`${minutes}:${seconds}`);
    });

    this.pomodoroService.getTimerStatus().subscribe((condition) => {
      this.timerStatus.set(condition);
    });

    this.pomodoroService.getCounter().subscribe((count) => {
      this.counterDisplay.set(count.toString().padStart(3, '0'));
    });

    this.konamiService.getKonami().subscribe((event) => {
      console.log(`Konami ${event}`);
    });
  }

  startTimer(): void {
    this.pomodoroService.startTimer();
  }

  stopTimer(): void {
    this.pomodoroService.stopTimer();
  }

  resetTimer(): void {
    this.pomodoroService.resetTimer();
    this.timerDisplay.set('25:00');
  }
}
