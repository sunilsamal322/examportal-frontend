import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[
    {
    cid:'',
    title:''
  }
]

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:''
    }
  };

  constructor(private _cat:CategoryService,private _snack:MatSnackBar,private _quiz:QuizService) { }

  ngOnInit(): void {

    this._cat.categories().subscribe((data:any)=>{
      this.categories=data;
    },(error)=>{
       Swal.fire("error","Error in loading data from Server","error");
    })
  }
  public addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title==null)
    {
      this._snack.open("Title required",'',{duration:2000})
    }
    //call server
    this._quiz.addQuiz(this.quizData).subscribe((data)=>{
      Swal.fire("Success","Quiz Added","success");
      this.quizData={
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestions:'',
        active:true,
        category:{
          cid:''
        }
      };
    },(error)=>{
        console.log(error);
        Swal.fire("Try Again","Something Went Wrong","error");
    })
  }

}
