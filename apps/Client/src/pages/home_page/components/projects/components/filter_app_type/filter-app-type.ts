import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { FilterAppUiFct } from './ui_fct';
import { NgComponentOutlet } from '@angular/common';
import { SvgT } from '@/common/types/general';
import { SvgStrokeCheckbox } from '@/common/components/svgs/stroke/checkbox/checkbox';
import { SvgFillCheckboxChecked } from '@/common/components/svgs/fill/checkbox_checked/checkbox-checked';
import { ProjectsSlice } from '@/features/projects/slice';
import { AppTypeT } from '@/features/projects/reducer';
import { RefDomT } from '@/common/types/dom';

@Component({
  selector: 'app-filter-app-type',
  imports: [NgComponentOutlet],
  templateUrl: './filter-app-type.html',
  styleUrl: './filter-app-type.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterAppType {
  public readonly FilterAppUiFct = FilterAppUiFct;

  private readonly projectsSlice: ProjectsSlice = inject(ProjectsSlice);

  public readonly SvgCheckbox: SvgT = SvgStrokeCheckbox;
  public readonly SvgCheckboxCheck: SvgT = SvgFillCheckboxChecked;

  public readonly isDrop: WritableSignal<boolean> = signal(false);

  @ViewChild('toggleRef') private toggleRef?: RefDomT;
  @ViewChild('dropRef') private dropRef?: RefDomT;

  public getSvg(appType: AppTypeT): SvgT {
    const currType = this.projectsSlice.appType();

    return currType.includes(appType) ? this.SvgCheckboxCheck : this.SvgCheckbox;
  }

  public toggleDrop() {
    this.isDrop.set(!this.isDrop());
  }

  public handleClickType(appType: AppTypeT) {
    this.projectsSlice.setAppType(appType);
    this.projectsSlice.setPage(0);
  }

  @HostListener('document:click', ['$event'])
  public closeDropOnOutsideClick(e: MouseEvent): void {
    const target = e.target as Node;

    const toggle = this.toggleRef?.nativeElement;
    const drop = this.dropRef?.nativeElement;

    const clickedToggle = toggle?.contains(target);
    const clickedDrop = drop?.contains(target);

    if (!clickedToggle && !clickedDrop) {
      this.isDrop.set(false);
    }
  }
}
