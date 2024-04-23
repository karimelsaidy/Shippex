import {userData} from './dummyData';

export type logInServiceType = {
  userNameOrEmail: string;
  password: string;
};

export async function logInService({
  userNameOrEmail,
  password,
}: logInServiceType): Promise<any> {
  const isValidUser = userNameOrEmail.length > 3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: isValidUser,
        ...(isValidUser
          ? {
              user: userData,
            }
          : {
              feedback: {
                message: {
                  en: 'Incorrect username or password',
                  ar: 'اسم المستخدم أو كلمة المرور غير صحيحة',
                },
              },
            }),
      });
    }, 1500);
  });
}
