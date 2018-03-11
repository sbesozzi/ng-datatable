import { Routes, RouterModule } from '@angular/router';

import { DatatableComponent } from './components/datatable/datatable.component';

// Routes object
export const APP_ROUTES = [
  {
    path: '',
    component: DatatableComponent
  },
  // {
  //   path: 'datatable',
  //   component: DatatableComponent
  // }
];
