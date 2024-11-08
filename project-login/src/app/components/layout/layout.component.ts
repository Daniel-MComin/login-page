import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
@Input() title: string = ""
@Input() primaryBtnText: string = ""
@Input() secondaryBtnText: string = ""
}
