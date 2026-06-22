import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterAppType } from './components/filter_app_type/filter-app-type';

@Component({
  selector: 'app-projects',
  imports: [FilterAppType],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {}
