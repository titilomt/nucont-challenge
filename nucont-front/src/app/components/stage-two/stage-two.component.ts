import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NucontService } from 'src/app/services/nucontService/nucont-service.service';

@Component({
  selector: 'app-stage-two',
  templateUrl: './stage-two.component.html',
  styleUrls: ['./stage-two.component.css']
})
export class StageTwoComponent implements AfterViewInit {
  @ViewChild('stageTwo', {static: false}) stageTwo: ElementRef;
  result:any = [];
  
  constructor(private nucontService: NucontService) { }

  ngAfterViewInit() {
    let x = this.nucontService.showTodayDate();
    console.log(x);
  }

  genarateJson(){
    this.nucontService.postStageTwo(this.stageTwo.nativeElement.textContent).subscribe(res => {
      this.result = JSON.stringify(res.data, undefined, 2);
    });
  }
}
