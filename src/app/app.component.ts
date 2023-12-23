import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, DashboardComponent, MatButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'sc2-upgrade-dashboard';
  darkMode: boolean = false;
  isMobile: boolean = false;
  acknowledged: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // Define a mobile breakpoint
    const mobileBreakpoint: string = Breakpoints.Handset;

    // Subscribe to changes in the mobile breakpoint
    this.breakpointObserver.observe([mobileBreakpoint]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
