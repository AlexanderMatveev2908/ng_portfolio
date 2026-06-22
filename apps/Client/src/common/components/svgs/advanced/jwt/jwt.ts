

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-jwt',
  templateUrl: `./jwt.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvJwt {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
