

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-vite',
  templateUrl: `./vite.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvVite {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
