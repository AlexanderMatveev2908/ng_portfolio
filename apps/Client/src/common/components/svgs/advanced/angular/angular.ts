

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-angular',
  templateUrl: `./angular.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvAngular {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
