import { Component, VERSION, ViewChild } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  @ViewChild(MatAutocompleteTrigger, { read: MatAutocompleteTrigger })
  inputAutoComplete: MatAutocompleteTrigger | undefined;
}
