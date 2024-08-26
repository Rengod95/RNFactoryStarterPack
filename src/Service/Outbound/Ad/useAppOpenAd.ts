import {useLayoutEffect, useMemo, useState} from 'react';

import {AdEventType} from 'react-native-google-mobile-ads';
import {AdvertisementService} from '@/Service/Outbound/Ad/Adapter.ts';

export const useAppOpenAd = () => {
  const [isAppOpenAdLoaded, setIsAppOpenAdLoaded] = useState<boolean>(false);
  const appOpenAdInstance = useMemo(() => {
    return AdvertisementService.getInstance().createAppOpenAdInstance();
  }, []);

  useLayoutEffect(() => {
    const unsubscribe = appOpenAdInstance.addAdEventListener(AdEventType.LOADED, () => {
      setIsAppOpenAdLoaded(true);
    });

    appOpenAdInstance.load();

    return unsubscribe;
  });

  const showAppOpenAd = () => {
    if (!appOpenAdInstance.loaded && !isAppOpenAdLoaded) {
      return;
    }

    return appOpenAdInstance.show();
  };

  // 주석 제거 시 앱 오픈 광고 활성화

  // useEffect(() => {
  //   showAppOpenAd();
  //
  //   return () => {
  //     appOpenAdInstance.load();
  //   };
  // }, [isAppOpenAdLoaded]);

  return {
    appOpenAdInstance,
    showAppOpenAd,
  };
};
