

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-framer',
  templateUrl: `./framer.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvFramer {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
