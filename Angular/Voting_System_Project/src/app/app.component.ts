import { Component } from '@angular/core';
import { __values } from 'tslib';
import { Voter } from './model/Voter';
import { VoterService } from './voter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Voting_System_Project';
  voterList:Voter;
  result:string;
  VoterArr:Voter[];
  flag:boolean;

constructor(private service : VoterService){
  this.voterList = new Voter();
  this.result="";
  this.VoterArr=[];
  this.flag=false;
}

  insertVoter(data:any){
    this.voterList.fname=data.fname;
    this.voterList.age=data.age;
    this.voterList.gender=data.gender;
    this.voterList.id=data.aadharno;
    //alert(data.fname+" "+data.age+" "+data.gender+" "+data.aadharno);
    this.result=this.service.insertVoter(this.voterList);
}

updateVoter(data:any){
  this.voterList.fname=data.fname;
    this.voterList.age=data.age;
    this.voterList.gender=data.gender;
    this.voterList.id=data.aadharno;

  this.result=this.service.updatetVoter(this.voterList);
}

deleteVoter(data:any){

  this.result=this.service.deleteVoter(data.aadharno);
}

findVoter(data:any){

  this.voterList=this.service.findVoter(data.aadharno);
  this.result=this.voterList.id+" "+this.voterList.fname+" "+this.voterList.age+" "+this.voterList.gender;
 
}

findallVoter(){
  this.VoterArr=this.service.findallVoter();
  this.flag=true;
}


}
