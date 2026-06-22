

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-playwright',
  templateUrl: `./playwright.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvPlaywright {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
