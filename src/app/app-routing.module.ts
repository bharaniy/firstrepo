import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrentComponent} from './current/current.component';
import {ForecastComponent} from './forecast/forecast.component';

const WEATHER_ROUTER: Routes = [{path: '', component: CurrentComponent}, {path: 'forecast', component: ForecastComponent}];

@NgModule({
  imports: [RouterModule.forRoot(WEATHER_ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const weatherRouting: ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);
