import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './job-seeker/job-list/job-list.component';
import { JobDetailsComponent } from './job-seeker/job-details/job-details.component';
import { PostJobComponent } from './recruiter/post-job/post-job.component';
import { JobApplyComponent } from './job-seeker/job-apply/job-apply.component';
import { AppliedSuccessfullyComponent } from './messages/applied-successfully/applied-successfully.component';
import { PostJobSuccessfullyComponent } from './messages/post-job-successfully/post-job-successfully.component';
import { ProfileComponent } from './job-seeker/profile/profile.component';
import { CandidateListComponent } from './recruiter/candidate-list/candidate-list.component';

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
  {
    path: 'applied-successfully',
    component: AppliedSuccessfullyComponent
  },
  {
    path: 'post-job-successfully',
    component: PostJobSuccessfullyComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'candidate-list',
    component: CandidateListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
