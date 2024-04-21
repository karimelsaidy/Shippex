import {getShipmentList} from './dummyData';

export type getShimentListServiceType = {
  status?: string[];
  word?: string;
};

export async function getShimentListService(
  props?: getShimentListServiceType,
): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: true,
        data: getShipmentList(props),
      });
    }, 3000);
  });
}
