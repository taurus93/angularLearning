import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularLearning';

  genericFunc<T>(argument: T): T[] {
    const arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
    return arrayOfT;
  }

  ngOnInit(): void {
    const arrayFromString = this.genericFunc<string>('TungLeThanh');
    console.log(arrayFromString[0]);         // "beep"
    console.log(typeof arrayFromString[0]);   // String

    const arrayFromNumber = this.genericFunc(42);
    console.log(arrayFromNumber[0]);         // 42
    console.log(typeof arrayFromNumber[0]);   // number
  }
}
