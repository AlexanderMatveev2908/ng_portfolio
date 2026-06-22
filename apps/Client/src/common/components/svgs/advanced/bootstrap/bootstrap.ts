

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-bootstrap',
  templateUrl: `./bootstrap.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvBootstrap {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
