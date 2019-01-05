import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './_services/api.service';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { UserFormComponent } from './userForm/userForm.component';
import { UsersListComponent } from './usersList/usersList.component';

@NgModule({
   declarations: [
      AppComponent,
      UserFormComponent,
      UsersListComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
    ApiService
   ],
   bootstrap: [
      AppComponent,
      UserFormComponent,
   ]
})
export class AppModule { }
