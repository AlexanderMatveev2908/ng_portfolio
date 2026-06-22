import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FilterAppType } from './components/filter_app_type/filter-app-type';
import { ProjectsSlice } from '@/features/projects/slice';
import { ProjectsUiFct } from '@/features/projects/ui_fct';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';
import { UsePlatformSvc } from '@/core/services/use_platform';
import { Breakpoints } from '@/core/constants/breakpoints';
import { Paginator } from './components/paginator/paginator';

@Component({
  selector: 'app-projects',
  imports: [FilterAppType, ImgLoading, Paginator],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects implements OnInit {
  public readonly limit: WritableSignal<number> = signal(1);

  private readonly usePlatform: UsePlatformSvc = inject(UsePlatformSvc);
  private readonly projectsSlice: ProjectsSlice = inject(ProjectsSlice);

  public readonly filtered = computed(() =>
    ProjectsUiFct.data.filter((el) => this.projectsSlice.appType().includes(el.appType)),
  );

  public readonly paginated = computed(() => {
    const page = this.projectsSlice.page();
    const limit = this.limit();

    const start = page * limit;
    const end = start + limit;

    return this.filtered().slice(start, end);
  });

  public readonly totPages: Signal<number> = computed(() =>
    Math.ceil(this.filtered().length / this.limit()),
  );

  public updateLimit(): void {
    if (this.usePlatform.isServer) {
      this.limit.set(1);
      return;
    }

    const width = window.innerWidth;

    if (width >= Breakpoints.XXL) this.limit.set(4);
    else if (width >= Breakpoints.XL) this.limit.set(3);
    else if (width >= Breakpoints.MD) this.limit.set(2);
    else this.limit.set(1);
  }
  ngOnInit(): void {
    this.updateLimit();
  }
  @HostListener('window:resize')
  public onResize() {
    this.updateLimit();

    if (this.projectsSlice.page() >= this.totPages()) {
      this.projectsSlice.setPage(0);
    }
  }
}
