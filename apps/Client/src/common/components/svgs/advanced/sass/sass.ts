

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-sass',
  templateUrl: `./sass.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvSass {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
