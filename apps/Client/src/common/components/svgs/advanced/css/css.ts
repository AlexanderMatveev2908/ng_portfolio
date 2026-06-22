

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-css',
  templateUrl: `./css.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvCss {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
