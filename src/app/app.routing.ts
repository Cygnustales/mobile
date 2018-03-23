import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Layout
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
//Components
import {UserComponent} from './Components/user/user.component';
import {HomeComponent} from './Components/home/home.component';
import {LoginComponent} from './Components/login/login.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { DetailProductsComponent } from './Components/detail-products/detail-products.component';
import { InfoComponent } from './Components/info/info.component';
import { BrandListComponent } from './Components/brand-list/brand-list.component';
import { VariantComponent } from './Components/variant/variant.component';
import { RegisterComponent } from './Components/register/register.component';
import { NewloginComponent } from './Components/newlogin/newlogin.component';
import { IntroComponent } from './Components/intro/intro.component';

const routes: Routes = [
    {
        path : '', 
        component : HomeLayoutComponent,
        children: [
    
            { 
                path: '', 
                component: HomeComponent 
            },
            { 
                path: 'info', 
                component: InfoComponent 
            },
            { 
                path: 'otp', 
                component: LoginComponent 
            },
            { 
                path: 'products', 
                component: AllProductsComponent
            },
            { 
                path: 'detail/:seo/:id', 
                component: DetailProductsComponent
            },
            { 
                path: 'detail/variant', 
                component: VariantComponent
            },
            { 
                path: 'list/:brand/:id', 
                component: BrandListComponent
            },
            { 
                path: 'register/:id', 
                component: RegisterComponent
            },
            {
                path: 'login',
                component: NewloginComponent
            },
            {
                path: 'intro',
                component: IntroComponent
            }
        ]
    }
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }