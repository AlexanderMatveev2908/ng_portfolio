

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-useQuery',
  templateUrl: `./useQuery.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvUsequery {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
