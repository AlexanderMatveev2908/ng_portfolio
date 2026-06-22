import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { TechStack } from './components/tech_stack/tech-stack';

@Component({
  selector: 'app-home-page',
  imports: [Hero, TechStack],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
