import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

import 'hammerjs';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TrainComponent } from './train/train.component';
import { RandomComponent } from './random/random.component';
import { SetsComponent } from './sets/sets.component';
import { HttpClientModule } from '@angular/common/http';
// import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { WordsetService } from './services/wordset.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TrainComponent,
    RandomComponent,
    SetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
    WordsetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
