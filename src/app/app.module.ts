import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import {
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule
} from '@angular/material';

import { JwPaginationModule } from 'jw-angular-pagination'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-seeker/job-list/job-list.component';
import { JobDetailsComponent } from './job-seeker/job-details/job-details.component';
import { JobApplyComponent } from './job-seeker/job-apply/job-apply.component';
import { SearchJobComponent } from './job-seeker/job-list/search-job/search-job.component';
import { PostJobComponent } from './recruiter/post-job/post-job.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailsComponent,
    JobApplyComponent,
    SearchJobComponent,
    PostJobComponent,
    NavbarComponent,
    FooterComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    JwPaginationModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    // PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
