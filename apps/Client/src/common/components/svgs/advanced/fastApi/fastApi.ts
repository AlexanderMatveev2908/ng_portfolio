

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-fastApi',
  templateUrl: `./fastApi.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvFastapi {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
