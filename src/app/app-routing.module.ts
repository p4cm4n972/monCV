import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { XpComponent } from './xp/xp.component';
import { CursusComponent } from './cursus/cursus.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'about', component: AboutComponent},
{path: 'xp', component: XpComponent},
{path: 'cursus', component: CursusComponent},
{path: 'skills', component: SkillsComponent},
{path: 'projet', component: PortfolioComponent},
{path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
