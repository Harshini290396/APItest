import { Routes } from '@angular/router';
import {RouterComponent} from './router/router.component';
import {PostsComponent} from './posts/posts.component';


const appRoutes: Routes = [
  { path: 'first',
    component: RouterComponent
  },
  {
    path: 'second',
    component: PostsComponent
  }
];
export default appRoutes;
