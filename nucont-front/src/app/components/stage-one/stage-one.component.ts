import { Component, AfterViewInit , ViewChild, ElementRef } from '@angular/core';
import { NucontService } from '../../services/nucontService/nucont-service.service';

@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.css']
})
export class StageOneComponent implements AfterViewInit  {
  @ViewChild('stageOne', {static: false}) stageOne: ElementRef;
  result:any = [];

  constructor(private nucontService: NucontService) { }

  ngAfterViewInit(): void {
    // outputs `I am span`
    let x = this.nucontService.showTodayDate();
  }

  genarateJson() {
    this.nucontService.postStage(this.stageOne.nativeElement.textContent).subscribe(res => {
      this.result = JSON.stringify(res.data, undefined, 2);
      console.log(this.result);
    });
  }
}
