import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitstyleHeatmapComponent } from './components/gitstyle-heatmap/gitstyle-heatmap.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heatmap',
    pathMatch: 'full',
  },
  {
    path: 'heatmap',
    component: GitstyleHeatmapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
