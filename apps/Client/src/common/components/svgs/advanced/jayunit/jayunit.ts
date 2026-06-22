

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-jayunit',
  templateUrl: `./jayunit.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvJayunit {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
