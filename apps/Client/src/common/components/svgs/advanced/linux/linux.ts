

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-linux',
  templateUrl: `./linux.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvLinux {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
