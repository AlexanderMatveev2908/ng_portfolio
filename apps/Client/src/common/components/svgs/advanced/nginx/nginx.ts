

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-nginx',
  templateUrl: `./nginx.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvNginx {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
