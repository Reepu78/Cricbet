import { Component } from '@angular/core';
import { MatchesService } from 'src/app/services/matchesList/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  constructor(private matchesList:MatchesService){}
  
  list:any={};
  matches:any={};
  ngOnInit(){
   
   this.matchesList.getMatches("upcoming").subscribe(data=>{
   this.list = data;
   debugger
    for (let i = 0; i< this.list.typeMatches.length; i++) {
      if (this.list.typeMatches[i].matchType=="International") {
        this.matches =  this.list.typeMatches[i].seriesMatches.filter((m: { adDetail: any; }) => !m.adDetail)
        
        console.log(this.matches);
        break;
      }
    }
    });

  }
}
