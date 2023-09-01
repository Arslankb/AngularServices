import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { SubscribeService } from './services/subscribe.service';
import { UserlistComponent } from './header/admin/userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent,
    UserlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubscribeService, UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
