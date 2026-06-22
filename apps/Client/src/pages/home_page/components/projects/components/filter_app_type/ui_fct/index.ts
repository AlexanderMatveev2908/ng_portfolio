import { AppTypeT } from '@/features/projects/reducer';
import { v4 } from 'uuid';

export class FilterAppUiFct {
  public static readonly data: { val: AppTypeT; id: string }[] = [
    'full-stack',
    'frontend',
    'backend',
  ].map((el) => ({
    val: el as AppTypeT,
    id: v4(),
  }));
}
