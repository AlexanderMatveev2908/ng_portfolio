

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-supabase',
  templateUrl: `./supabase.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvSupabase {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
