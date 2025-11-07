import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamePreviewComponent } from './game-preview/game-preview.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestPreviewComponent } from './test-preview/test-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    TestPreviewComponent,
    GamePreviewComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
