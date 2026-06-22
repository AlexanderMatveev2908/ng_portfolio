import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TechStackUiFct } from './ui_fct';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  imports: [NgComponentOutlet],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStack {
  public readonly TechStackUiFct = TechStackUiFct;
}
