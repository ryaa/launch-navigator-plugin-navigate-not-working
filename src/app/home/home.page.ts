import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';

declare const window: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private launchNavigator: LaunchNavigator,
    private platform: Platform
  ) { }

  public openAddress(address: string) {
    if (address) {
      const options: LaunchNavigatorOptions = {
        successCallback: (val: any) => {
          console.log('successCallback', val);
        },
        errorCallback: (error: string) => {
          console.log('errorCallback', error);
        }
      };
      if (this.platform.is('android')) {
        options.launchModeGoogleMaps = window.launchnavigator.LAUNCH_MODE.GEO;
      }
      this.launchNavigator.navigate(address, options);
    }
  }

}
