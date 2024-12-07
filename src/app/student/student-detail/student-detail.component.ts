import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentDetail } from '../../model/student-detail';

import { RouterModule } from '@angular/router';
import { ScoreDetail } from '../../model/score-detail';
import { ScoreService } from '../../model/score-service';
import { ScoreComponent } from '../../score/score.component';

@Component({
  selector: 'app-student-detail',
  imports: [RouterModule,ScoreComponent],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit{
  scoreDetails!: ScoreDetail[];
  constructor(private scoreService: ScoreService) {

  }

  ngOnInit(): void {
    this.scoreDetails=this.scoreService.getScoreDetails();
  }
  onScoreSelected(score:ScoreDetail){
    console.log(score);
  }


  @Input({
    required: true
  })
  detail: StudentDetail | null = null;
  @Output()
  chooseStudentEvent = new EventEmitter<StudentDetail>();

  onSelectStudent(student:StudentDetail){
    this.chooseStudentEvent.emit(student);
  }
}