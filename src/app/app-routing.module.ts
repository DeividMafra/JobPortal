import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './job-seeker/job-list/job-list.component';
import { JobDetailsComponent } from './job-seeker/job-details/job-details.component';
import { PostJobComponent } from './recruiter/post-job/post-job.component';
import { JobApplyComponent } from './job-seeker/job-apply/job-apply.component';

const routes: Routes = [
  {
    path: '',
    component: JobListComponent
  },
  {
    path: ':jobId/details',
    component: JobDetailsComponent
  },
  {
    path: 'post-job',
    component: PostJobComponent
  },
  {
    path: ':jobId/job-apply',
    component: JobApplyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
