

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-react',
  templateUrl: `./react.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvReact {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
