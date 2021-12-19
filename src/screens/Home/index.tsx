import React, {useState} from 'react'
import { View, FlatList, Text } from 'react-native'

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';

import { Profile } from "../../components/Profile";
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles'

export function Home () {
    const [category, setCategory] = useState('')

    const appointements = [
        { 
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', 
            date: '19/12 às 20:30h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da Md10'
        },
        
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
        
    }

return (
    <View>
           <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
        </View>
            <CategorySelect
              categorySelected={category}
              setCategory={handleCategorySelect}
          />
         <View style={styles.content}>
             <ListHeader
               title="Partidas agendadas"
               subtitle="Total 06"
             />
            <FlatList 
                     data={appointements}
                     keyExtractor={item => item.id}
                     renderItem={({ item }) => (
                     <Appointment data={item} />
                  )}
             ItemSeparatorComponent={() => <ListDivider/>}
             style={styles.matches}
             showsVerticalScrollIndicator={false}
            />
        </View>
     </View>
    )
}