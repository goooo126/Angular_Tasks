import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';

@NgModule({
  declarations: [App, Header, Navbar, Products, Footer, Sidebar],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
