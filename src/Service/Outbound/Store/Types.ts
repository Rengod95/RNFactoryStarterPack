import {ApplicationStoreInterface} from '@/Service/Outbound/Application/Store.ts';

export type Store = {
  ApplicationStore: React.Context<ApplicationStoreInterface>;
};
