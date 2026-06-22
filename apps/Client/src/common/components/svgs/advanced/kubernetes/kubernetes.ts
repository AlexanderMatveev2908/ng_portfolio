

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-kubernetes',
  templateUrl: `./kubernetes.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvKubernetes {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
