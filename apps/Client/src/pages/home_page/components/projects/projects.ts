import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FilterAppType } from './components/filter_app_type/filter-app-type';
import { ProjectsSlice } from '@/features/projects/slice';
import { ProjectsUiFct } from '@/features/projects/ui_fct';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';

@Component({
  selector: 'app-projects',
  imports: [FilterAppType, ImgLoading],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly projectsSlice: ProjectsSlice = inject(ProjectsSlice);

  public readonly filtered = computed(() =>
    ProjectsUiFct.data.filter((el) => this.projectsSlice.appType().includes(el.appType)),
  );
}
