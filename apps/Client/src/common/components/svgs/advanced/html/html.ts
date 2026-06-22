

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-html',
  templateUrl: `./html.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvHtml {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
