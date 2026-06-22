

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-figma',
  templateUrl: `./figma.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvFigma {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
