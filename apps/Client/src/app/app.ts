import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from '@/layout/toast/toast';
import { Navbar } from '@/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
