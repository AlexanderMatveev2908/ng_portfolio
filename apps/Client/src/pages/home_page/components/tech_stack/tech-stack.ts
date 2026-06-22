import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TechStackUiFct } from './ui_fct';
import { NgComponentOutlet, NgClass } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  imports: [NgComponentOutlet, NgClass],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStack {
  public readonly TechStackUiFct = TechStackUiFct;
}
