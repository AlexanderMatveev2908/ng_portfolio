

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-nameCheap',
  templateUrl: `./nameCheap.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvNamecheap {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
