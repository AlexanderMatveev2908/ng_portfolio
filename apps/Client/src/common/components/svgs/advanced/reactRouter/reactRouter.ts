

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-reactRouter',
  templateUrl: `./reactRouter.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvReactrouter {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
