import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrdFooterModule } from 'src/widgets/prd-footer/prd-footer.module';
import { PrdHeaderModule } from 'src/widgets/prd-header/prd-header.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrdHeaderModule, PrdFooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
