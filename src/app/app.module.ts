import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { TopBrandsComponent } from './Components/top-brands/top-brands.component';
import { BestSellerComponent } from './Components/best-seller/best-seller.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { DetailProductsComponent } from './Components/detail-products/detail-products.component';
import { InfoComponent } from './Components/info/info.component';
import { BrandListComponent } from './Components/brand-list/brand-list.component';
import { VariantComponent } from './Components/variant/variant.component';
import { RegisterComponent } from './Components/register/register.component';
import { NewloginComponent } from './Components/newlogin/newlogin.component';
import { IntroComponent } from './Components/intro/intro.component';
//Services
import { Services } from './Services/services.service';
import { DataService } from './Services/data/data.service';


//




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeLayoutComponent,
    HeaderComponent,
    HomeComponent,
    TopBrandsComponent,
    BestSellerComponent,
    AllProductsComponent,
    DetailProductsComponent,
    InfoComponent,
    BrandListComponent,
    VariantComponent,
    RegisterComponent,
    NewloginComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ngebet-kredit-web' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [Services, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
