

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-upstash',
  templateUrl: `./upstash.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvUpstash {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
