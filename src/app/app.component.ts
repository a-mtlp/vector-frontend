import {Component} from '@angular/core';
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./services/auth.service";
import {HttpClient} from "@angular/common/http";
import {timeout} from "rxjs";

export interface ParkingLot {
  id?: number;
  parkingLotNumber: number;
  isBooked: boolean;
  isActive: boolean;
  power: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vector';
  isLoggedIn = false;
  data: ParkingLot[] = [];

  constructor(private oauthService: OAuthService, private http: HttpClient) {
    oauthService.configure(authCodeFlowConfig);
    oauthService.loadDiscoveryDocumentAndTryLogin();
    oauthService.setupAutomaticSilentRefresh();

  }

  ngOnInit() {
    this.oauthService
      .events
      .subscribe(e => {
        console.log(e);
        if (e.type == 'token_expires') {
          this.oauthService.refreshToken();
        }
      });
  }


  login() {
    this.oauthService.initLoginFlow();

  }

  userinfo() {
    this.oauthService.loadUserProfile();
  }

  accessResourceServer() {
    this.http.get < ParkingLot[] > ("http://113-30-191-47.cloud-xip.com/api/listOfAvailableParkinglots")
      .subscribe((value: ParkingLot[]) => {
        this.data = value;
      });
  }

  book(id: number | undefined) {


  }
}
