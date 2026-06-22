

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-python',
  templateUrl: `./python.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvPython {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
