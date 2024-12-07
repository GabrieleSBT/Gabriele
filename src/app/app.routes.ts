import { Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { Component } from '@angular/core';
import { ScoreComponent } from './score/score.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


export const routes: Routes = [
    {path:'search', component:StudentListComponent},
    {path: '', component:StudentDetailComponent},
    {path: 'score', component:ScoreComponent}

];