import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private _quiz:QuizService,
    private _cat:CategoryService,
    private _snack:MatSnackBar,
    private _router:Router) { }

  qId=0;
  quiz:any;
  categories:any;

  ngOnInit(): void {
   this.qId=this.route.snapshot.params['qid'];

   this._quiz.getQuiz(this.qId).subscribe((data:any)=>{
     this.quiz=data
     console.log(this.quiz);
   },(error)=>{
     console.log(error);
   })
   this._cat.categories().subscribe((data:any)=>{
     this.categories=data;
   },(error)=>{
     Swal.fire("Error","Error in loading data","error");
   })
  }
  public updateForm()
  {
    if(this.quiz.title.trim()=='' || this.quiz.title==null)
    {
      this._snack.open("Title required",'',{duration:2000});
      return;
    }
    this._quiz.updateQuiz(this.quiz).subscribe((data)=>{
      Swal.fire("Success","Quiz Updated","success").then((e)=>{
        this._router.navigate(['admin/quizzes'])
      });
    },(error)=>{
      Swal.fire("Error","Error in updating","error");
    })
  }
}
