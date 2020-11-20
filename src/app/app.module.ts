import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// Highcharts modules must be provided in a factory (required for aot)
import { ChartModule, HIGHCHARTS_MODULES } from "angular-highcharts";
import * as more from "highcharts/highcharts-more.src";
import * as solidGauge from "highcharts/modules/solid-gauge.src";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartModule],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, solidGauge] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
