

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-poetry',
  templateUrl: `./poetry.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvPoetry {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
