import {useContext} from 'react';
import {Store} from '@/Service/Outbound/Store/Types.ts';
import {ApplicationStoreContext} from '@/View/BootStrap/GlobalStoreProvider.tsx';

const stores: Store = {
  ApplicationStore: ApplicationStoreContext,
};

type ContextType<T> = T extends React.Context<infer U> ? U : never;

export const useGlobalStore = <K extends keyof Store>(key: K): ContextType<Store[K]> => {
  const store = useContext(stores[key]);
  return store as ContextType<Store[K]>;
};
