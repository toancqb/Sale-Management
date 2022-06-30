import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-client-page',
  templateUrl: 'client.page.html',
  styleUrls: ['client.page.scss']
})
export class ClientPage implements OnInit {

  private test2: Client;

  constructor(private appService: AppService) {}

  public ngOnInit() {
    console.log('init zzz');
  }

  public onClick(): void {

  }

}
