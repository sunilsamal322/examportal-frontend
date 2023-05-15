import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  public getQuestionsOfQuiz(qid:any)
  {
    return this._http.get(`${baseurl}/question/quiz/all/${qid}`);
  }
  public getQuestionsOfQuizForTest(qid:any)
  {
    return this._http.get(`${baseurl}/question/quiz/${qid}`);
  }
  public addQuestion(question:any)
  {
    return this._http.post(`${baseurl}/question/`,question);
  }
  public deleteQuestion(quesid:any)
  {
    return this._http.delete(`${baseurl}/question/${quesid}`);
  }
  public getQuestion(quesId:any)
  {
    return this._http.get(`${baseurl}/question/${quesId}`)
  }
  public updateQuestion(question:any)
  {
    return this._http.put(`${baseurl}/question/`,question);
  }
  public evalQuiz(questions:any)
  {
    return this._http.post(`${baseurl}/question/eval-quiz`,questions);
  }
}
