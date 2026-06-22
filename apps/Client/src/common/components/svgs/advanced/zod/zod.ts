

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-zod',
  templateUrl: `./zod.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvZod {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
