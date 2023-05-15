import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[
    {
      qid:'',
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:'',
      category:
      {
        title:''
      }
    },
  ]

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe((data:any)=>{
      this.quizzes=data
      console.log(data);
    },(error)=>{
      console.log(error);
      Swal.fire("Error","Error in loading data","error")
    })
  }
  deleteQuiz(qId:any)
  {
    Swal.fire({
      icon:'warning',
      title:"Are you sure ?",
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this._quiz.deleteQuiz(qId).subscribe((data)=>{
          this.quizzes=this.quizzes.filter((quiz)=>quiz.qid!=qId);
          Swal.fire("Success","Quiz Deleted","success");
        },(error)=>{
          Swal.fire("Try Again","Something Went Wrong","error");
        })
      }
    })
  }
}
