

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SkyAppAssetsService } from '@skyux/assets';
import { SkyAppRuntimeConfigParams, SkyAppConfig, SkyAppParamsConfig } from '@skyux/config';
import { SkyAppWindowRef } from '@skyux/core';
import { SkyThemeModule, SkyThemeService } from '@skyux/theme';
import { SkyI18nModule } from '@skyux/i18n';
import { SkyAppTitleService, SkyViewkeeperHostOptions } from '@skyux/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Subscription } from 'rxjs';

import '../../src/main';

import {
  AppExtrasModule
} from '../../src/app/app-extras.module';

import {
  SkyAppBootstrapper
} from '@skyux-sdk/builder/runtime';

import {
  SkyAppHostLocaleModule
} from '@skyux-sdk/builder/runtime/i18n/app-host-locale.module';

import {
  SkyAppAuthTokenModule
} from '@skyux-sdk/builder/runtime/auth-token.module';

export class SkyAppAssetsImplService {
  private pathMap: {[key: string]: any} = {
    'locales/resources_en_US.json': '/practice/assets/locales/resources_en_US.9a97e48f8c7f934ca3f813edcf670c5187b5ff4a.json'
  };
  public getUrl(filePath: string): string {
    return this.pathMap[filePath];
  }
  public getAllUrls(): {[key: string]: any} {
    return this.pathMap;
  }
}

export function SkyAppConfigFactory(windowRef: SkyAppWindowRef): any {
  const config: any = {"runtime":{"app":{"inject":false,"template":"C:\\Users\\aartizanwar\\skyux-spa-aartizanwar40\\node_modules\\@skyux-sdk\\builder\\src\\main.ejs","base":"/practice/","name":"practice"},"command":"build","componentsPattern":"**/*.component.ts","componentsIgnorePattern":"./public/**/*","includeRouteModule":true,"routesPattern":"**/index.html","runtimeAlias":"@skyux-sdk/builder/runtime","srcPath":"src/app/","spaPathAlias":"../..","skyPagesOutAlias":"../..","useTemplateUrl":true,"handle404":true,"routes":[{"routePath":"about","routeParams":[]},{"routePath":"","routeParams":[]},{"routePath":""},{"routePath":"**","routeParams":[]}]},"skyux":{"$schema":"./node_modules/@skyux/config/skyuxconfig-schema.json","mode":"easy","host":{"url":"https://host.nxt.blackbaud.com"},"app":{"title":"Blackbaud - SKY UX Application","styles":["@skyux/theme/css/sky.css","src/app/styles.scss","@skyux/ag-grid/css/sky-ag-grid.css"]},"compileMode":"aot","params":{"addin":true,"envid":true,"leid":true,"svcid":true}}};
  config.runtime.params = new SkyAppRuntimeConfigParams(
    windowRef.nativeWindow.location.toString(),
    {"addin":true,"envid":true,"leid":true,"svcid":true}
  );
  return config;
}

export function skyViewkeeperHostOptionsFactory(config: SkyAppConfig): SkyViewkeeperHostOptions {
  const omnibarExists = config.skyux.omnibar && config.runtime.params.get('addin') !== '1';

  const hostOptions = new SkyViewkeeperHostOptions();
  hostOptions.viewportMarginTop = omnibarExists ? 50 : 0;

  return hostOptions;
}

export function skyAppParamsConfigFactory(config: SkyAppConfig): SkyAppParamsConfig {
  return new SkyAppParamsConfig({
    params: config.skyux.params
  });
}

// Setting skyux config as static property exclusively for Bootstrapper
SkyAppBootstrapper.config = {"$schema":"./node_modules/@skyux/config/skyuxconfig-schema.json","mode":"easy","host":{"url":"https://host.nxt.blackbaud.com"},"app":{"title":"Blackbaud - SKY UX Application","styles":["@skyux/theme/css/sky.css","src/app/styles.scss","@skyux/ag-grid/css/sky-ag-grid.css"]},"compileMode":"aot","params":{"addin":true,"envid":true,"leid":true,"svcid":true}};

// BEGIN IMPORTED COMPONENT: AboutComponent
import { AboutComponent } from '../../src/app/about/about.component';
// END IMPORTED COMPONENT: AboutComponent

// BEGIN IMPORTED COMPONENT: SkyDataEntryGridContextMenuComponent
import { SkyDataEntryGridContextMenuComponent } from '../../src/app/DataEntryGrid/data-entry-grid-context-menu.component';
// END IMPORTED COMPONENT: SkyDataEntryGridContextMenuComponent

// BEGIN IMPORTED COMPONENT: SkyDataEntryGridEditModalComponent
import { SkyDataEntryGridEditModalComponent } from '../../src/app/DataEntryGrid/data-entry-grid-edit-modal.component';
// END IMPORTED COMPONENT: SkyDataEntryGridEditModalComponent

// BEGIN IMPORTED COMPONENT: DataEntryGridComponent
import { DataEntryGridComponent } from '../../src/app/DataEntryGrid/data-entry-grid.component';
// END IMPORTED COMPONENT: DataEntryGridComponent

// BEGIN IMPORTED COMPONENT: HomeComponent
import { HomeComponent } from '../../src/app/home.component';
// END IMPORTED COMPONENT: HomeComponent

// BEGIN IMPORTED COMPONENT: LoginComponent
import { LoginComponent } from '../../src/app/login/login.component';
// END IMPORTED COMPONENT: LoginComponent

// BEGIN IMPORTED COMPONENT: AppNavComponent
import { AppNavComponent } from '../../src/app/shared/app-nav.component';
// END IMPORTED COMPONENT: AppNavComponent

// AUTO GENERATED FROM: src/app/about/index.html
@Component({
  templateUrl: '../../src/app/about/index.html'
})
export class SPR_0_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/index.html
@Component({
  templateUrl: '../../src/app/index.html'
})
export class SPR_1_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

@Component({ template: '<router-outlet></router-outlet>' }) export class RootComponent {}

@Component({ template: `<iframe src="https://host.nxt.blackbaud.com/errors/notfound" style="border:0;height:100vh;width:100%;" [title]="'skyux_builder_page_not_found_iframe_title' | skyAppResources"></iframe>` }) export class NotFoundComponent { }
const appRoutingProviders: any[] = []
const routes: Routes = [
{
    path: '',
    component: RootComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: [{
    path: 'about',
    component: SPR_0_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: '',
    component: SPR_1_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  }]
  },
{
    path: '**',
    component: NotFoundComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  }
];
const routing = RouterModule.forRoot(routes, { useHash: false });

import { enableProdMode } from '@angular/core';
enableProdMode();

require('!style-loader!css-loader!sass-loader!@skyux/theme/css/sky.css');
require('!style-loader!css-loader!sass-loader!src/app/styles.scss');
require('!style-loader!css-loader!sass-loader!@skyux/ag-grid/css/sky-ag-grid.css');


@NgModule({
  declarations: [
    AboutComponent,
    SkyDataEntryGridContextMenuComponent,
    SkyDataEntryGridEditModalComponent,
    DataEntryGridComponent,
    HomeComponent,
    LoginComponent,
    AppNavComponent,
    SPR_0_IndexComponent,
    SPR_1_IndexComponent,
    RootComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SkyI18nModule,
    SkyAppHostLocaleModule,
    SkyAppAuthTokenModule,
    AppExtrasModule,
    SkyThemeModule,
    routing
  ],
  exports: [
    AboutComponent,
    SkyDataEntryGridContextMenuComponent,
    SkyDataEntryGridEditModalComponent,
    DataEntryGridComponent,
    HomeComponent,
    LoginComponent,
    AppNavComponent,
    SPR_0_IndexComponent,
    SPR_1_IndexComponent,
    RootComponent,
    NotFoundComponent
  ],
  providers: [
    SkyAppWindowRef,
    {
      provide: SkyAppConfig,
      deps: [
        SkyAppWindowRef
      ],
      useFactory: SkyAppConfigFactory
    },
    {
      provide: SkyAppParamsConfig,
      useFactory: skyAppParamsConfigFactory,
      deps: [SkyAppConfig]
    },
    {
      provide: SkyAppAssetsService,
      useClass: SkyAppAssetsImplService
    },
    {
      provide: SkyViewkeeperHostOptions,
      deps: [
        SkyAppConfig
      ],
      useFactory: skyViewkeeperHostOptionsFactory
    },
    SkyThemeService,
    SkyAppTitleService,
    appRoutingProviders
  ]
}) export class SkyPagesModule { }