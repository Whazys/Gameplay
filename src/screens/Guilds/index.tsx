import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { Load } from '../../components/Load'

import { styles } from './styles'
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { api } from '../../services/api';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void,
}

export function Guilds ({ handleGuildSelect }: Props){
    const [guilds, setGuild] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true)

    async function fetchGuild(){
        const response = await api.get('/users/@me/guilds')

        setGuild(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchGuild()
    }, [])


    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                <FlatList
                    data={guilds}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Guild
                            onPress={() => handleGuildSelect(item)}
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider isCentered/>}
                    ListHeaderComponent={() => <ListDivider isCentered/>}
                    contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                    style={styles.guilds}
                />
            }
        </View>
    )
}

