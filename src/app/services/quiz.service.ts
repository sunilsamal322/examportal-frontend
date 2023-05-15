import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes()
  {
    return this._http.get(`${baseurl}/quiz/`);
  }
  public addQuiz(quiz:any)
  {
    return this._http.post(`${baseurl}/quiz/`,quiz);
  }
  public deleteQuiz(qid:any)
  {
    return this._http.delete(`${baseurl}/quiz/${qid}`);
  }
  //get single quiz
  public getQuiz(qId:any)
  {
    return this._http.get(`${baseurl}/quiz/${qId}`);
  }
  public updateQuiz(quiz:any)
  {
    return this._http.put(`${baseurl}/quiz/`,quiz);
  }
  //get quizzes of category
  public getQuizzesOfCategory(catId:any)
  {
    return this._http.get(`${baseurl}/quiz/category/${catId}`)
  }
  //get active quizzes
  public getActiveQuizzes()
  {
    return this._http.get(`${baseurl}/quiz/active`);
  }
  //get active quizzes of category
  public getActiveQuizzesOfCategory(catId:any)
  {
    return this._http.get(`${baseurl}/quiz/category/active/${catId}`)
  }
}
