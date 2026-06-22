

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-gunicorn',
  templateUrl: `./gunicorn.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvGunicorn {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
