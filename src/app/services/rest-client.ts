import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestClient {
  url;
  constructor(private httpClient: HttpClient) {}
}
