import { Component,Input,Output,EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScoreDetail } from '../model/score-detail';

@Component({
  selector: 'app-score-component',
  imports: [RouterModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

  @Input({
    required: true
  })
  scDetail: ScoreDetail | null = null;
  @Output()
  chooseScoreEvent = new EventEmitter<ScoreDetail>();

  onSelectScore(score:ScoreDetail){
    this.chooseScoreEvent.emit(score);
  }

}