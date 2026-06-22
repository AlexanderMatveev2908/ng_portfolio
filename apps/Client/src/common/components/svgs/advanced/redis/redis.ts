

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-redis',
  templateUrl: `./redis.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvRedis {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
