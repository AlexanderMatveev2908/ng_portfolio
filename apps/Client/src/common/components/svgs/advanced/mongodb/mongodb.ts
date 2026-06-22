

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-mongodb',
  templateUrl: `./mongodb.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvMongodb {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
