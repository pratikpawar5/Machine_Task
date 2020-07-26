import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchResultComponent } from './navigation-bar/search-result/search-result.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { HttpClientModule } from '@angular/common/http';
import { ExternalModule } from '../app/external/external.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ExternalModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
