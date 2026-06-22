

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-java',
  templateUrl: `./java.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvJava {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
