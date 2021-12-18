import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; 
import { View } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

import { styles } from './styles'

type Props = RectButtonProps & {
  title: string,
  icon: React.FC<SvgProps>;
  checked?: boolean
}

export function Category ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
    const {secondary50, secondary70} = theme.colors

    return (
        <RectButton {...rest}>
                  <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}
        >

        </LinearGradient>
        </RectButton>
    )
}