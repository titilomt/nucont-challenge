import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NucontService } from 'src/app/services/nucontService/nucont-service.service';
import { Balance } from 'src/app/models/balance.nucont';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-stage-three',
  templateUrl: './stage-three.component.html',
  styleUrls: ['./stage-three.component.css']
})
export class StageThreeComponent implements AfterViewInit {
  @ViewChild('stageThree', {static: false}) stageThree: ElementRef;
  result:any = [];
  
  balances: Array<Balance> = [];

  constructor(private nucontService: NucontService, private alertService: AlertService) { }

  ngAfterViewInit() {
    let x = this.nucontService.showTodayDate();
    console.log(x);
  }

  genarateJson(){
    this.nucontService.postStageThree(this.stageThree.nativeElement.textContent).subscribe(res => {
      this.result = JSON.stringify(res.data, undefined, 2);
      res.data.forEach((el: { _id: any; description: String; classifier: String; openingBalance: Number; debit: Number; credit: Number; finalBalance: Number; parent: any; }) => {
        let balance = new Balance(el._id, el.description, el.classifier, el.openingBalance, el.debit, el.credit, el.finalBalance, el.parent);
        this.balances.push(balance);
      });
    });
  }

  save() {
    this.nucontService.postSave(this.balances).subscribe(res => {
      if(res.status === 200) this.success('Data salved with success =) ');

      else this.error('Ops something went wrong =( '); 

      this.clearFields();
    });
  }

  clearFields(){
    this.balances = [];
    this.result = [];
  }

  success(message: string) { 
    this.alertService.success(message);
  }

  error(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }
}
