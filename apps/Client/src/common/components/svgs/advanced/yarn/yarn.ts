

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-yarn',
  templateUrl: `./yarn.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvYarn {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
