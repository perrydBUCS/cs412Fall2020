import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentAComponent } from './parents/parent-a/parent-a.component';
import { ChildAComponent } from './children/child-a/child-a.component';
import { ChildBComponent } from './children/child-b/child-b.component';
import { ParentBComponent } from './parents/parent-b/parent-b.component';
import { ParentCComponent } from './parents/parent-c/parent-c.component';
import { ChildCComponent } from './children/child-c/child-c.component';
import { ChildDComponent } from './children/child-d/child-d.component';
import { ParentDComponent } from './parents/parent-d/parent-d.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAComponent,
    ChildAComponent,
    ChildBComponent,
    ParentBComponent,
    ParentCComponent,
    ChildCComponent,
    ChildDComponent,
    ParentDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
