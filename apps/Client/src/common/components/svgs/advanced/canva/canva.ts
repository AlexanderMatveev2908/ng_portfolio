

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-canva',
  templateUrl: `./canva.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvCanva {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
