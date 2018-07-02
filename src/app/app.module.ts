import { CyclistService } from './cyclist.service'
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { CyclistFormComponent } from './cyclist-form/cyclist-form.component';
import { CyclistListComponent } from './cyclist-list/cyclist-list.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CyclistFormComponent,
    CyclistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    Angular2FontawesomeModule
  ],
  providers: [CyclistService, AngularFireModule, AngularFirestoreModule, AngularFireStorageModule, AngularFireAuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
