

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-typescript',
  templateUrl: `./typescript.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvTypescript {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
