import { Component } from '@angular/core';
import { TranslateService } from './services/translate/translate.service';
import { NucontService } from './services/nucontService/nucont-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService, private nucontService: NucontService) { }
}
