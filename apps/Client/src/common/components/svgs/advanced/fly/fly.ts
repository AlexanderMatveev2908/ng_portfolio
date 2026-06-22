

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-fly',
  templateUrl: `./fly.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvFly {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
