

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-spring',
  templateUrl: `./spring.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvSpring {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
