import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

type NavigationProps = React.PropsWithChildren<{}>

const NavigationContainerProvider = ({children}:NavigationProps) => {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
};

export default NavigationContainerProvider;
