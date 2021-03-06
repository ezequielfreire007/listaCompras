import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingProvider } from '../providers/setting/setting';

//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'LoginPage';
  selectTheme:String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private setting: SettingProvider) {
    this.setting.getActiveProfesional().subscribe(val => this.selectTheme = val);
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

