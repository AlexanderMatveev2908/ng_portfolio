import { SvgFillChevLeft } from '@/common/components/svgs/fill/chev_left/chev-left';
import { SvgFillChevRight } from '@/common/components/svgs/fill/chev_right/chev-right';
import { SvgStrokeChevLeft } from '@/common/components/svgs/stroke/chev_left/chev-left';
import { SvgStrokeChevRight } from '@/common/components/svgs/stroke/chev_right/chev-right';
import { SvgT } from '@/common/types/general';
import { Breakpoints } from '@/core/constants/breakpoints';
import { UseInjCtxHk } from '@/core/hooks/use_inj_ctx';
import { UsePlatformSvc } from '@/core/services/use_platform';
import { ProjectsSlice } from '@/features/projects/slice';
import { ProjectsUiFct } from '@/features/projects/ui_fct';
import { NgClass, NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  input,
  InputSignal,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { v4 } from 'uuid';

@Component({
  selector: 'app-paginator',
  imports: [NgComponentOutlet, NgClass],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Paginator extends UseInjCtxHk implements OnInit {
  public readonly limit: InputSignal<number> = input.required();
  public readonly totPages: InputSignal<number> = input.required();

  public readonly limitBlockPages: WritableSignal<number> = signal(1);
  public readonly currBlockPages: WritableSignal<number> = signal(0);

  public readonly projectsSlice: ProjectsSlice = inject(ProjectsSlice);

  public handleClickPage(val: number) {
    this.projectsSlice.setPage(val);
  }

  public readonly SvgRight: SvgT = SvgStrokeChevRight;
  public readonly SvggLeft: SvgT = SvgStrokeChevLeft;

  public readonly pagesToShow: Signal<{ val: number; label: string; id: string }[]> = computed(
    () => {
      const start = this.currBlockPages() * this.limitBlockPages();
      const end = Math.min(start + this.limitBlockPages(), this.totPages());

      return Array.from({ length: end - start }, (_, i) => {
        const page = start + i;

        return {
          val: page,
          label: String(page + 1),
          id: v4(),
        };
      });
    },
  );

  public readonly totalBlocks = computed(() => Math.ceil(this.totPages() / this.limitBlockPages()));

  public handleNextBlock() {
    this.currBlockPages.set(this.currBlockPages() + 1);
  }
  public handlePrevBlock() {
    this.currBlockPages.set(this.currBlockPages() - 1);
  }

  ngOnInit(): void {
    this.updateLimitBlockPages();

    this.useEffect(() => {
      const totalBlocks = this.totalBlocks();

      if (this.currBlockPages() >= totalBlocks) {
        this.currBlockPages.set(0);
      }
    });
  }

  @HostListener('window:resize')
  public updateLimitBlockPages(): void {
    const width = window.innerWidth;

    if (this.usePlatform.isServer) {
      this.limitBlockPages.set(1);
      return;
    }

    if (width >= Breakpoints.XXL) {
      this.limitBlockPages.set(5);
    } else if (width >= Breakpoints.XL) {
      this.limitBlockPages.set(4);
    } else if (width >= Breakpoints.LG) {
      this.limitBlockPages.set(3);
    } else if (width >= Breakpoints.MD) {
      this.limitBlockPages.set(2);
    } else {
      this.limitBlockPages.set(1);
    }
  }
}
