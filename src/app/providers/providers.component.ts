import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import { PROVIDERS } from '../mock-providers';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers = PROVIDERS;

  selectedProvider: Provider;

  constructor() { }

  ngOnInit() {
  }

  onSelect(provider: Provider): void {
    this.selectedProvider = provider;
  }

}
