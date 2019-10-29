import {RestClient} from '../services/rest-client';
import {isArray} from 'util';

export function UrlParam(param) {
  return function(target: RestClient, propertyKey: string, propertyIndex: number) {
    const urlParam = {
      key: param,
      index: propertyIndex,
    };

    const key = 'url_parameters';
    if (isArray(target[key])) {
      target[key].push(urlParam);
    } else {
      target[key] = [urlParam];
    }
  };
}
