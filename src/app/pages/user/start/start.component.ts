import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid:any;
  questions:any;

  marksGot=0;
  correctAnswers=0;
  attempted=0;

  isSubmit=false;

  timer:any;

  constructor(private locationst:LocationStrategy,private _route:ActivatedRoute,private _question:QuestionService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this._route.snapshot.params['qid'];
    this.loadQuestions();

  }
  loadQuestions()
  {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe((data:any)=>{

      this.questions=data;

      this.timer=this.questions.length*2*60;

     
      console.log(this.questions)
      this.startTimer();
    },(error)=>{
      Swal.fire("Error","Error in loading questions of this quiz","error")
    })
  }
  preventBackButton()
  {
    history.pushState(null,"",location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,"",location.href)
    });
    
  }
  submitQuiz()
  { 
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon:'info'
    }).then((e)=>{
      if(e.isConfirmed)
      {
        this.evalQuiz();
      }
    })
  }
  startTimer()
  {
    let t:any=window.setInterval(()=>{
      if(this.timer<=0)
      {
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }
  getFormattedTime()
  {
    let mm=Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return `${mm} min : ${ss} sec`;
  }
  evalQuiz()
  {

    //call the server to evaluate the quiz

    this._question.evalQuiz(this.questions).subscribe((data:any)=>{
      //console.log(data);
      this.marksGot=parseFloat(Number(data.marksGot).toFixed(2));
      this.correctAnswers=data.correctAnswers;
      this.attempted=data.attempted;
      this.isSubmit=true;
    },(error)=>{
      console.log(error)
    })



    // this.isSubmit=true;
    //     //calculation
    //     this.questions.forEach((q:any) => {
    //         if(q.givenAnswer==q.answer)
    //         {
    //           this.correctAnswers++;
    //           let marksingle=this.questions[0].quiz.maxMarks/this.questions.length;
    //           this.marksGot+=marksingle;
    //         }
    //         if(q.givenAnswer.trim()!='')
    //         {
    //           this.attempted++;
    //         }
                    
    //     });
        // console.log(this.correctAnswers)
        //     console.log(this.marksGot)  
        //     console.log(this.attempted)    
  }
  printPage()
  {
    window.print();
  }  
}
