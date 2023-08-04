import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemModule } from './modules/item/item.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api-interceptor.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { CategoryModule } from './modules/category/category.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './modules/material-ui/material-ui.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    ItemModule,
    HttpClientModule,
    AppRoutingModule,
    CategoryModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
