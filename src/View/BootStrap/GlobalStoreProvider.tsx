import {createContext} from 'react';
import ApplicationStore, {ApplicationStoreInterface} from '@/Service/Outbound/Application/Store.ts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const ApplicationStoreContext = createContext<ApplicationStoreInterface>();

type GlobalStoreProviderProps = React.PropsWithChildren<object>;

export const GlobalStoreProvider = ({children}: GlobalStoreProviderProps) => {
  return <ApplicationStoreContext.Provider value={ApplicationStore}>{children}</ApplicationStoreContext.Provider>;
};
