import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { DirectivesModule } from './directives/directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './interceptor.module';
import { NucontService } from './services/nucontService/nucont-service.service';
import { TranslateService } from './services/translate/translate.service';
import { TranslatePipe } from './pipe/translate/translate.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { StageOneComponent } from './components/stage-one/stage-one.component';
import { StageTwoComponent } from './components/stage-two/stage-two.component';
import { StageThreeComponent } from './components/stage-three/stage-three.component';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    PlaceholderComponent,
    MainNavComponent,
    HomeComponent,
    StageTwoComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    StageOneComponent,
    StageThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    Interceptor,
    FontAwesomeModule,
    LayoutModule,
    DirectivesModule,
    FlexLayoutModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    },
    NucontService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){ 
    library.add(fas);
  }
}
