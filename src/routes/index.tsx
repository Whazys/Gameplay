import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from "./auth.routes";
import {NativeScreenNavigationContainer} from "react-native-screens";

export function Routes () {
    return (
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
    )
}