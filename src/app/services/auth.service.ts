import {Injectable} from '@angular/core';

import {AuthConfig} from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://113-30-191-139.cloud-xip.com',
  requireHttps: false,
  useSilentRefresh:false,
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: '77e4628e-8e8a-11ed-a1eb-0242ac120002',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',
  userinfoEndpoint:'http:113.30.191.139/userinfo',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid parkinglot.read',

  showDebugInformation: true,
  timeoutFactor: 0.75

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }
}
