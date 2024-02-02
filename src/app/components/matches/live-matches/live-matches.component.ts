import { Component } from '@angular/core';
import { MatchesService } from 'src/app/services/matchesList/matches.service';

@Component({
  selector: 'app-live-matches',
  templateUrl: './live-matches.component.html',
  styleUrls: ['./live-matches.component.css']
})

export class LiveMatchesComponent {

  constructor(private matchesList:MatchesService){}
  list:any={};
  matches:any={};
  ngOnInit(){
  this.matchesList.getMatches("live").subscribe(data=>{
   this.list = data;
   for (let i = 0; i< this.list.typeMatches.length; i++) {
      if (this.list.typeMatches[i].matchType=="League" || "International") {
        this.matches =  this.list.typeMatches[i].seriesMatches.filter((m: { adDetail: any; }) => !m.adDetail)
        
        console.log(this.matches);
        break;
      }
    }
    });
  }
  

}
