import {RestClient} from '../services/rest-client';
import {HttpRequest, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

export enum HttpMethod {
  GET = 'GET',
}

export function Request(endpoint: string, httpMethod: 'GET') {
  return function(target: RestClient, propertyKey: string, descriptor: PropertyDescriptor) {
    const urlParams = target[`url_parameters`];

    descriptor.value = function(...args: any[]) {
      let url = `${this.url}${endpoint}`;

      if (urlParams) {
        for (const param of urlParams) {
          url = url.replace(':' + param.key, args[ param.index ]);
        }
      }

      const request = new HttpRequest(httpMethod, url);

      return this.httpClient.request(request).pipe(
        map((response: HttpResponse<any>) => response.body)
      );
    };

    return descriptor;
  };
}
