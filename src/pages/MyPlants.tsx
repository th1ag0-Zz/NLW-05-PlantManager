import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Alert
} from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { PlantProps, loadPlant, deletePlant } from '../libs/storage';

import Header from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import waterdrop from '../assets/waterdrop.png'
import PlantCardSecondary from '../components/PlantCardSecondary';
import Load from '../components/Load';

const MyPlants: React.FC = () => {

  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>()

  useEffect(() => {
    async function loadStarageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} daqui a ${nextTime}`
      )

      setMyPlants(plantsStoraged)
      setLoading(false)
    }

    loadStarageData()
  }, [])

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 😱',
        style: 'cancel'
      },
      {
        text: 'Sim 😉',
        style: 'cancel',
        onPress: async () => {
          try {
            
            await deletePlant(plant.id)

            setMyPlants((oldData) => (
              oldData.filter(item => item.id !== plant.id)
            ))

          } catch (error) {
            Alert.alert('Não foi possível remover ;-;')
          }
        }
      }
    ])
  }

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image
          style={styles.spotlightImage}
          source={waterdrop}
        />
        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },

  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  spotlightImage: {
    width: 60,
    height: 60,
  },

  spotlightText: {
    flex: 1,
    paddingHorizontal: 20,
    color: colors.blue,
  },

  plants: {
    flex: 1,
    width: '100%'
  },

  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  }
})

export default MyPlants;