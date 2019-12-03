// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{path: 'auth', loadChildren: 'app/views/pages/auth/auth.module#AuthModule'},

	// enable this router to set which demo1 theme to load,
	// leave the path value empty to enter into nested router in ThemeModule
	// {path: '', loadChildren: 'app/views/themes/demo1/theme.module#ThemeModule'},

	/** START: remove this themes list on production */
	{path: '', redirectTo: 'demo1', pathMatch: 'full'},
	// list of routers specified by demos, for demo purpose only!
	{path: 'demo1', loadChildren: 'app/views/themes/demo1/theme.module#ThemeModule'},
	{path: 'demo2', loadChildren: 'app/views/themes/demo2/theme.module#ThemeModule'},
	{path: 'demo3', loadChildren: 'app/views/themes/demo3/theme.module#ThemeModule'},
	{path: 'demo4', loadChildren: 'app/views/themes/demo4/theme.module#ThemeModule'},
	{path: 'demo5', loadChildren: 'app/views/themes/demo5/theme.module#ThemeModule'},

	/** END: themes list end */

	{path: '**', redirectTo: 'demo1/error/403', pathMatch: 'full'},
	// {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
