import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NucontService } from 'src/app/services/nucontService/nucont-service.service';
import { Balance } from 'src/app/models/balance.nucont';
import { AlertService } from 'src/app/services/alert/alert.service';


@Component({
  selector: 'app-stage-four',
  templateUrl: './stage-four.component.html',
  styleUrls: ['./stage-four.component.css']
})
export class StageFourComponent implements AfterViewInit {
  @ViewChild('stageFour', {static: false}) stageFour: ElementRef;
  result:any = [];
  
  balances: Array<Balance> = [];

  constructor(private nucontService: NucontService, private alertService: AlertService) { }

  ngAfterViewInit() {
    let x = this.nucontService.showTodayDate();
    console.log(x);
  }

  genarateJson(){
    console.log(this.stageFour.nativeElement.textContent);
    this.nucontService.postStageFour(this.stageFour.nativeElement.textContent).subscribe(res => {
      this.result = JSON.stringify(res.data, undefined, 2);
      res.data.forEach((el: Array<Balance>) => {
        el.forEach((bal:Balance) => {
          let b = new Balance(bal._id, bal.description, bal.classifier, bal.openingBalance, bal.debit, bal.credit, bal.finalBalance, bal.parent);
          console.log(b);
          this.balances.push(b);
        });        
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
