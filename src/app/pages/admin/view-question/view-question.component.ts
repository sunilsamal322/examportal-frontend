import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions:any;

  constructor(private _route:ActivatedRoute,private _question:QuestionService,private _sanck:MatSnackBar) { }


  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      console.log(data);
      this.questions=data;
    },(error)=>{
      console.log(error);
    })
  }
  deleteQuestion(quesId:any)
  {
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure, you want to delete?'
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this._question.deleteQuestion(quesId).subscribe((data)=>{
        this._sanck.open("Questions deleted",'',{duration:3000})
        this.questions=this.questions.filter((q:any)=>q.quesId!=quesId)
        },(error)=>{
          this._sanck.open("Error in deleting question",'',{duration:2000})})
      }
    })
  }
}
