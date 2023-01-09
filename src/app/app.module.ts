import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {OAuthModule} from "angular-oauth2-oidc";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(
      {
        resourceServer: {
          sendAccessToken: true,

          allowedUrls: ['http://113-30-191-47.cloud-xip.com/api', 'http://113-30-191-47.cloud-xip.com/userinfo', 'http://113-30-191-47.cloud-xip.com/oauth2', 'http://113-30-191-47.cloud-xip.com/oauth2/token']
        }
      }
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
