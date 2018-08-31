import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from './adunit.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [AdunitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
