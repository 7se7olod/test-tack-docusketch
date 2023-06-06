import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RandomIconService} from "../services/random-icon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public randomIcon$ = this.randomIconService.randomIcon$;

  constructor(private changeDetector: ChangeDetectorRef, private randomIconService: RandomIconService) {
  }

  ngOnInit() {
    this.randomIconService.randomIconGenerator();
  }

  public changeIcon() {
    setTimeout(this.randomIconService.randomIconGenerator, 3000);
  }
}
