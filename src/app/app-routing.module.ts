import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './job-seeker/job-list/job-list.component';
import { JobDetailsComponent } from './job-seeker/job-details/job-details.component';

const routes: Routes = [
  {
    path: '',
    component: JobListComponent
  },
  {
    path: ':jobId/details',
    component: JobDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
