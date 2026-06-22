

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-vsc',
  templateUrl: `./vsc.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvVsc {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
