import { Component, Input } from '@angular/core';
import { Section } from '../section';
import { Link } from '../link';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() section: Section;

  isActive: boolean;

  constructor() {
    this.isActive = false;
  }

  changeState(): void {
    this.isActive ? this.isActive = false : this.isActive = true;
  }

}
