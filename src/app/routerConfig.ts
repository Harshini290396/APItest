import { Routes } from '@angular/router';
import {RouterComponent} from './router/router.component';
import {PostsComponent} from './posts/posts.component';


const appRoutes: Routes = [
  { path: 'home',
    component: RouterComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];
export default appRoutes;
