import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ComplaintInterface {
  id?: string;
  title: string;
  description: string;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ComplaintGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  user_id?: string;
}
