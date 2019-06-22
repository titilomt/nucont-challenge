import { Component, AfterViewInit , ViewChild, ElementRef } from '@angular/core';
import { NucontService } from '../../services/nucontService/nucont-service.service';
import { Balance } from './../../models/balance.nucont';
import { AlertService } from './../../services/alert/alert.service';

@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.css']
})
export class StageOneComponent implements AfterViewInit  {
  @ViewChild('stageOne', {static: false}) stageOne: ElementRef;
  result:any = [];

  balances: Array<Balance> = [];

  constructor(private nucontService: NucontService, private alertService: AlertService) { }

  ngAfterViewInit(): void {
    // outputs `I am span`
  }

  genarateJson() {
    this.nucontService.postStageOne(this.stageOne.nativeElement.textContent).subscribe(res => {
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
      
    });

    this.clearFields();
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
