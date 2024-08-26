import {useEffect} from 'react';
import mediator from '@/Service/ServicesMediator.ts';
import ApplicationStore from '@/Service/Outbound/Application/Store.ts';

export const useInitializeServices = () => {
  useEffect(() => {
    mediator.initializeServices(() => {
      ApplicationStore.changeServiceInitializationState(true);
      ApplicationStore.changeApplicationInitializationState(true);
    });
  }, []);
};
