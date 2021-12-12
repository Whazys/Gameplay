import React from 'react'
import { View,
    Text,
    TextInput,
    Image,
    StatusBar
} from 'react-native'

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'

export function SignIn (){

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image source={IllustrationImg}
                   style={styles.image}
                   resizeMode="stretch"
                    />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Venha puta {'\n'}
                    {/*suas jogatinas {'\n'}*/}
                    {/*facilmente*/}
                </Text>

                <Text style={styles.subtitle}>
                    Chame seus amigos {'\n'}
                    Para xingar a mãe de todos nesse game
                </Text>

                <ButtonIcon />

            </View>
        </View>
    )
}