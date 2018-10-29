import { Component } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private datasubscription: Subscription;
  private statesubscription: Subscription;
  //public uiData: WsData;

  constructor(private websocketService: AppService) { }

  ngOnInit() {
    this.websocketService.connectWebSocket();
    this.datasubscription = this.websocketService.getSocketDataObservable().subscribe(this.onData);
    //this.statesubscription = this.websocketService.getSocketStateObservable().subscribe(this.onStateChange);
  }

  private onData = (message: Message) => {
    console.log(message.body);
    //this.uiData = JSON.parse(message.body);
  }

  private onStateChange = (state: String) => {
    console.log('WS connection state changed ' + state);
  }

  ngOnDestroy() {
    this.datasubscription.unsubscribe();
    this.statesubscription.unsubscribe();
  }
}
