import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LiveMatchesComponent } from './components/matches/live-matches/live-matches.component';
import { SigninComponent } from './components/signin/signin/signin.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { BetsComponent } from './components/bets/bets/bets.component'

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MatchesComponent } from './components/matches/matches/matches.component';
import { WalletComponent } from './components/User/wallet/wallet.component';
import { ProfileComponent } from './components/User/profile/profile.component';
import { MybetComponent } from './components/User/mybet/mybet.component';
import { CoinsbuyComponent } from './components/User/coinsbuy/coinsbuy.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup'
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CreateTeamComponent } from './components/createTeam/create-team/create-team.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LiveMatchesComponent,
    SigninComponent,
    SignupComponent,
    BetsComponent,
    MatchesComponent,
    WalletComponent,
    ProfileComponent,
    MybetComponent,
    CoinsbuyComponent,
    CreateTeamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    FormsModule

    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
