import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  private test2: Client;

  constructor(private appService: AppService) {}

  public ngOnInit() {
  }

  public onClick(): void {

  }

}
