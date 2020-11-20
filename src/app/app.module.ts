import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';
import { HomeComponent } from './comps/home/home.component';
import {
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  MainCardComponent,
  SideBarComponent,
} from './shared/index';
import { SimpleCardComponent } from './shared/simple-card/simple-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MainCardComponent,
    SideBarComponent,
    HeaderComponent,
    LayoutComponent,
    SimpleCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
