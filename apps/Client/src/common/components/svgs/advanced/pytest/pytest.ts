

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-pytest',
  templateUrl: `./pytest.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvPytest {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
