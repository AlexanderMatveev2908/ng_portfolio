import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { TechStack } from './components/tech_stack/tech-stack';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-home-page',
  imports: [Hero, TechStack, Projects],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
