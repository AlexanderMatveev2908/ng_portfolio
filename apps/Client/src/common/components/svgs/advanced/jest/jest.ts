

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-jest',
  templateUrl: `./jest.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvJest {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
