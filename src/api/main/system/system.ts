import service from '@/service';

import type { IDataType } from '../../type';
import type { IPageListDataParam } from './type';

export const getPageListData = (param: IPageListDataParam) =>
  service.request<IDataType>({
    url: param.pageUrl,
    method: 'post',
    data: param.queryInfo
  });
