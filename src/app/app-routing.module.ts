import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveMatchesComponent } from './components/matches/live-matches/live-matches.component';
import { SigninComponent } from './components/signin/signin/signin.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { BetsComponent } from './components/bets/bets/bets.component';
import { MatchesComponent } from './components/matches/matches/matches.component';
import { WalletComponent } from './components/User/wallet/wallet.component';
import { MybetComponent } from './components/User/mybet/mybet.component';
import { ProfileComponent } from './components/User/profile/profile.component';
import { CoinsbuyComponent } from './components/User/coinsbuy/coinsbuy.component';
import { AuthGuard } from './services/auth.guard';
import { CreateTeamComponent } from './components/createTeam/create-team/create-team.component';

const routes: Routes = [
  {path:'', component:LiveMatchesComponent},
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  {path:'bets', component:BetsComponent},
  {path:'createteam', component:CreateTeamComponent},
  {path:'matches', component:MatchesComponent},
  {path:'wallet', component: WalletComponent,canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path:'mybets', component: MybetComponent,canActivate:[AuthGuard]},
  {path:'coins', component:CoinsbuyComponent , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
