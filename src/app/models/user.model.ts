import {AddressModel} from './address.model';
import {CompanyModel} from './company.model';

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  company: CompanyModel;
}
