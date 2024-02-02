import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http:HttpClient) { }

  baseurl = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/";
  
  headers = {
    'X-RapidAPI-Key': 'ccc961b77bmsh00b22bc9ebb1796p164944jsn5839b950168f',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
  
  
  getMatches(data:string){
    return this.http.get(this.baseurl+data, {headers:this.headers});
  }

}

