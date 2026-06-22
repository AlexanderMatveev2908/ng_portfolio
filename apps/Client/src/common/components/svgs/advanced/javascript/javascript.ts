

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-javascript',
  templateUrl: `./javascript.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvJavascript {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
