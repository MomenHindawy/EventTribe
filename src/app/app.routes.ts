import { Routes } from '@angular/router';
import { BlankLayOutComponent } from './components/layOuts/blank-lay-out/blank-lay-out.component';
import { HomeComponent } from './components/shared/home/home.component';
import { CreatEventComponent } from './components/creat-event/creat-event.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HelpCentreComponent } from './components/help-centre/help-centre.component';
import { EmilyComponent } from './components/emily/emily.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthLayOutComponent } from './components/layOuts/auth-lay-out/auth-lay-out.component';
import { FindEventsComponent } from './components/find-events/find-events.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AboutMeComponent } from './components/userProfileCom/about-me/about-me.component';
import { MyBookingsComponent } from './components/userProfileCom/my-bookings/my-bookings.component';
import { MyEventsComponent } from './components/userProfileCom/my-events/my-events.component';
import { CalenderComponent } from './components/userProfileCom/calender/calender.component';
import { SettingsComponent } from './components/userProfileCom/settings/settings.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [

    {
        path: (''), component: AuthLayOutComponent, children: [
            { path: (''), redirectTo: 'home', pathMatch: 'full' },
            { path: ('home'), component: HomeComponent },
            { path: ('findE'), component: FindEventsComponent },
            { path: ('creatE'), component: CreatEventComponent },
            { path: ('HCentre'), component: HelpCentreComponent },
            { path: ('login'), component: LogInComponent },
            { path: ('signUp'), component: SignUpComponent },
        ]
    },
    {
        path: ('blank'), component: BlankLayOutComponent, children: [
            { path: (''), redirectTo: 'home', pathMatch: 'full' },
            { path: ('home'), component: HomeComponent },
            { path: ('creatE'), component: CreatEventComponent },
            { path: ('favorite'), component: FavoritesComponent },
            { path: ('HCentre'), component: HelpCentreComponent },
            {
                path: ('emily'), component: EmilyComponent, children: [
                    { path: (''), redirectTo: 'aboutMe', pathMatch: 'full' },
                    { path: ('aboutMe'), component: AboutMeComponent },
                    { path: ('myBooking'), component: MyBookingsComponent },
                    { path: ('myEvent'), component: MyEventsComponent },
                    { path: ('calender'), component: CalenderComponent },
                    { path: ('settings'), component: SettingsComponent },
                ]
            },
        ]

    }, {
        path: ('**'), component: NotFoundComponent
    }

];
