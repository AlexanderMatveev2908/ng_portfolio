

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-docker',
  templateUrl: `./docker.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvDocker {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
