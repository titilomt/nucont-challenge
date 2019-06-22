import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NucontService } from 'src/app/services/nucontService/nucont-service.service';

@Component({
  selector: 'app-stage-three',
  templateUrl: './stage-three.component.html',
  styleUrls: ['./stage-three.component.css']
})
export class StageThreeComponent implements AfterViewInit {
  @ViewChild('stageThree', {static: false}) stageThree: ElementRef;
  result:any = [];
  
  constructor(private nucontService: NucontService) { }

  ngAfterViewInit() {
    let x = this.nucontService.showTodayDate();
    console.log(x);
  }

  genarateJson(){
    this.nucontService.postStageThree(this.stageThree.nativeElement.textContent).subscribe(res => {
      this.result = JSON.stringify(res.data, undefined, 2);
    });
  }
}
