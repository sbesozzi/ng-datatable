import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SuiModule } from 'ng2-semantic-ui';

import { APP_COMPONENTS } from './app.components';
import { APP_SERVICES } from './app.services';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        ...APP_COMPONENTS
    ],
    imports: [
        BrowserModule,
        SuiModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [
        ...APP_SERVICES
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
