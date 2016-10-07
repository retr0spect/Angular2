import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
      <h1>Inline Template</h1>
      <fa-other></fa-other>
      <fa-another>
          <div>
              <h2>Hello</h2>
              <p>World</p>
          </div>
      </fa-another>
      <fa-another>
          <h3>Something Else</h3>
      </fa-another>
`,
  styles: [`
    h1 {
        color: red;
    }
`]
})
export class AppComponent {
  title = 'Aditya';
}
