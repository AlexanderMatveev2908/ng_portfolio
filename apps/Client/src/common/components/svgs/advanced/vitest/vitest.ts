

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-vitest',
  templateUrl: `./vitest.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvVitest {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
