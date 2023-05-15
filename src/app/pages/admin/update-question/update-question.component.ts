import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  quesId:any;
  question:any;
  

  constructor(private _route:ActivatedRoute,private _question:QuestionService,private _snack:MatSnackBar) { }

  ngOnInit(): void {

    this.quesId=this._route.snapshot.params['quesId'];
    this._question.getQuestion(this.quesId).subscribe((data)=>{
      this.question=data;

    },(error)=>{
      this._snack.open("Error in loading data",'',{duration:2000})
    })
    
  }
  public updateQuestion()
  {
    if(this.question.content.trim()=='' || this.question.content==null)
    {
      this._snack.open("Content required",'ok',{duration:2000});
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null)
    {
      this._snack.open("Option1 required",'ok',{duration:2000});
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option2==null)
    {
      this._snack.open("Option2 required",'ok',{duration:2000});
      return;
    }
    if(this.question.option3.trim()=='' || this.question.option3==null)
    {
      this._snack.open("Option3 required",'ok',{duration:2000});
      return;
    }
    if(this.question.option4.trim()=='' || this.question.option4==null)
    {
      this._snack.open("Option4 required",'ok',{duration:2000});
      return;
    }
    if(this.question.answer.trim()=='' || this.question.answer==null)
    {
      this._snack.open("answer required",'ok',{duration:2000});
      return;
    }

    this._question.updateQuestion(this.question).subscribe((data)=>{
      this._snack.open("Question updated",'',{duration:3000})
    },(error)=>{
      this._snack.open("Error in updating",'',{duration:3000})
    })
    
    
  }

}
