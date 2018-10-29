import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StompConfig, StompService } from '@stomp/ng2-stompjs';
import { stompConfig } from './stomp.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
