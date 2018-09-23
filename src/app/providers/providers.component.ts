import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers: Provider[];

  selectedProvider: Provider;

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.getProviders();
  }

  onSelect(provider: Provider): void {
    this.selectedProvider = provider;
  }
   getProviders(): void {
    this.providerService.getProviders()
        .subscribe(providers => this.providers = providers);
  }

}
