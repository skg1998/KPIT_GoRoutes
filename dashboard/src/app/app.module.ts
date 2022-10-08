import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
<<<<<<< HEAD
=======
import { ChartsModule } from 'ng2-charts';
>>>>>>> c24b29ccfbec2cd3ec019d4a16e256b9f017f04a
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

=======
    ChartsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFirestoreModule,
    AngularFireStorageModule,
>>>>>>> c24b29ccfbec2cd3ec019d4a16e256b9f017f04a
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
