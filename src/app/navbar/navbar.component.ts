import { Component } from '@angular/core'

@Component({
  // use selectors to identify this component
  selector: 'app-navbar',
  // instead of template, can use templateUrl: './path/to/navbar.component.html'
  // template: `<h1>Navbar Component</h1>
  // <p>lorem ipsum doller immet</p>`,
  templateUrl: './navbar.component.html',
  // use backticks inside styles to be able to write code on multiple lines
  // can also use styleUrl
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //       font-size: 50px;
  //     }
  //   `,
  // ],
  styleUrls: ['../../styles.scss'],
})

// add export; in app.module.ts, import { NavbarComponent }
// add NavbarComponent in declarations
export class NavbarComponent {}
