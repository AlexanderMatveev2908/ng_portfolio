

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-redux',
  templateUrl: `./redux.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvRedux {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
