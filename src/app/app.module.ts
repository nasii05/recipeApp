import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


// Zoom library
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CardflipComponent } from './cardflip/cardflip.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    CardflipComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageZoomModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
