import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MypowerPipe } from './mypower.pipe';
import { ChildComponent } from './child/child.component';
import { TestchildComponent } from './test/testchild/testchild.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MypowerPipe,
    ChildComponent,
    TestchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
