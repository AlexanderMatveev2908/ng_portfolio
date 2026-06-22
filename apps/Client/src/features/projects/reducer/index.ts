import { ProjectT } from '@/common/types/projects';
import { createReducer, on } from '@ngrx/store';
import { ProjectsActT } from './actions';

export type AppTypeT = 'full-stack' | 'frontend' | 'backend';

export interface ProjectsStateT {
  appType: AppTypeT[];
  page: number;
  filtered: ProjectT[];
}

const initState: ProjectsStateT = {
  appType: ['full-stack', 'frontend', 'backend'],
  page: 0,
  filtered: [],
};

export const projectsReducer = createReducer(
  initState,
  on(ProjectsActT.SET_APP_TYPE, (_: ProjectsStateT, action: { appType: AppTypeT[] }) => ({
    ..._,
    appType: action.appType,
  })),
  on(ProjectsActT.SET_PAGE, (_: ProjectsStateT, action: { page: number }) => ({
    ..._,
    page: action.page,
  })),
  on(ProjectsActT.SET_FILTERED, (_: ProjectsStateT, action: { filtered: ProjectT[] }) => ({
    ..._,
    filtered: action.filtered,
  })),
);
