import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutModule } from './features/main-layout/main-layout.module';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  { path: 'admin',
    loadChildren: () => import('./features/main-layout/main-layout.module').then(m => m.MainLayoutModule),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
