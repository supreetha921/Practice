const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomepageComponent,},
  { path: ':city', component: CountryDetailComponent },  
  { path: ':city/:subscategory', component: ExploreListComponent }, 
  { path: ':city/:subscategory/:singleitem', component: DetailedPageComponent },
];