import {API_BASE} from '@/env';
import {appLang} from '@/utils';

export type logInServiceType = {
  email: string;
  password: string;
};

export async function logInService(params: logInServiceType): Promise<any> {
  return (
    `${API_BASE}auth/individual/phone/register`,
    {
      method: 'post',
      data: params,
    }
  );
}
