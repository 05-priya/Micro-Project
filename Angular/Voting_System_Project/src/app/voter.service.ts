import { Injectable } from '@angular/core';
import { Voter } from './model/Voter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
url:string;
VoterArr:Voter[];
 VoterList:Voter;
  constructor(private http :HttpClient) {
    this.url="http://localhost:3004/voterLists";
    this.VoterArr=[];
    this.VoterList=new Voter();
   }
   insertVoter(voterList:Voter){
    this.http.post<Voter>(this.url, voterList).subscribe();
    return "Voter Details Added";
   }

   updatetVoter(voterList:Voter){
    this.http.put<Voter>(this.url+"/"+voterList.id, voterList).subscribe();
    return "Voter Details updated";
   }

   deleteVoter(aadharno:number){
    this.http.delete<Voter>(this.url+"/"+aadharno).subscribe();
    return "Voter Details deleted";
   }
   findVoter(aadharno:number){
    this.http.get<Voter>(this.url+"/"+aadharno).subscribe(data => this.VoterList =data);
    return this.VoterList;
   }
   findallVoter(){
    this.http.get<Voter[]>(this.url).subscribe(data => this.VoterArr = data);
    return this.VoterArr;
    }

}
