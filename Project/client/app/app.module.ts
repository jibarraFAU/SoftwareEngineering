import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterTestingModule } from '@angular/router/testing';
import { Routes, RouterModule, } from '@angular/router';

import { AppComponent } from './app.component';
import { EmotesComponent } from './components/emotes/emotes.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AuthModule,
        AuthRoutingModule,
        RouterModule.forRoot(
            [
                { path: "", component: LoginComponent }
            ]
        ),
        AppRoutingModule
        //RouterTestingModule,
    ],
    declarations: [AppComponent, EmotesComponent, ChartsComponent,],
    bootstrap: [AppComponent]

})
export class AppModule { }