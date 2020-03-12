import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Mychatbot2SharedModule } from 'app/shared/shared.module';
import { Mychatbot2CoreModule } from 'app/core/core.module';
import { Mychatbot2AppRoutingModule } from './app-routing.module';
import { Mychatbot2HomeModule } from './home/home.module';
import { Mychatbot2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { ChatModule } from './chat/chat.module';

@NgModule({
  imports: [
    BrowserModule,
    Mychatbot2SharedModule,
    Mychatbot2CoreModule,
    Mychatbot2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Mychatbot2EntityModule,
    Mychatbot2AppRoutingModule,
    ChatModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Mychatbot2AppModule {}
