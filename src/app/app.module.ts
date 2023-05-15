import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import {MatListModule} from '@angular/material/list';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import {MatDividerModule} from '@angular/material/divider';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';
import { UserhomeComponent } from './pages/user/userhome/userhome.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';  
import { SlickCarouselModule } from 'ngx-slick-carousel'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    UserdashboardComponent,
    AddCategoryComponent,
    AddQuizComponent,
    DashboardComponent,
    SidebarComponent,
    UpdateQuizComponent,
    ViewCategoriesComponent,
    ViewQuestionComponent,
    ViewQuizzesComponent,
    WelcomeComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserSidebar,
    UserhomeComponent,
    UpdateProfileComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true}),
    SlickCarouselModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
