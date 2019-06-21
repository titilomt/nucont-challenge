import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatDividerModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatDividerModule, MatGridListModule]
})
export class MaterialModule { }
