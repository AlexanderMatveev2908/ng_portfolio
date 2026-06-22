

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-node',
  templateUrl: `./node.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvNode {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
