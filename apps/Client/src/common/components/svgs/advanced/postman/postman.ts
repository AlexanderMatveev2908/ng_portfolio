

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-postman',
  templateUrl: `./postman.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvPostman {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
