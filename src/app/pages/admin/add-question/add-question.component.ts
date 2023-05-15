import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  
  qId:any;
  qTitle:any;
  question={
    quiz:{qid:''},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  };

  constructor(private _router:ActivatedRoute,private _question:QuestionService,private _snack:MatSnackBar) { }

  ngOnInit(): void {


    this.qId=this._router.snapshot.params['qid'];
    this.qTitle=this._router.snapshot.params['title'];
    this.question.quiz['qid']=this.qId;
  }

  formSubmit()
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

    this._question.addQuestion(this.question).subscribe((data)=>{
      Swal.fire("Success","Question Added","success");
    },(error)=>{
      Swal.fire("Try Again","Error in adding question","error");
    })
  }
}
