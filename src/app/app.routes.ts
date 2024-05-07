import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksheetsComponent } from './worksheets/worksheets.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MoreComponent } from './more/more.component';
import { ProductComponent } from './product/product.component';
import { EndangeredanimalsComponent } from './endangeredanimals/endangeredanimals.component';
import { HelpanimalsComponent } from './helpanimals/helpanimals.component';
import { VideosComponent } from './videos/videos.component';
import { AnimalinfoComponent } from './animalinfo/animalinfo.component';

export const routes: Routes = [
    {'path': '', 'title': 'Home',component:HomeComponent},
    {'path': 'worksheets', 'title': 'Worksheets', component:WorksheetsComponent},
    {'path': 'aboutus', 'title': 'About', component:AboutComponent},
    {'path': 'contactus', 'title': 'Contact', component:ContactUsComponent},
    {'path': 'more', 'title': 'More', component:MoreComponent},
    {'path': 'more', children:[
        {'path': 'videos', 'title': 'More | Videos' , component:VideosComponent},
        {'path': 'endangeredanimals', 'title': 'More | Endangered Species', component:EndangeredanimalsComponent},
        {'path': 'endangeredanimals', children:[
            {'path': 'animalinfo/:animalName', 'title': 'More | Videos | Animal Info' , component:AnimalinfoComponent},
        ]},
        {'path': 'helpanimals', 'title': 'More | Help Animals', component:HelpanimalsComponent},
    ]},
    {'path': 'product', 'title': 'Product', component:ProductComponent}
];
