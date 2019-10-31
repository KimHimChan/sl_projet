import React, {PureComponent} from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';

var {height, width} = Dimensions.get('window');
var price = 0;
var time = 0;
var time_g = '';
var hours_g = '';
var hours_str = '';

class Services extends PureComponent{

state = {checked: []}

changeState(index, money, minuts){
  let checked = [...this.state.checked];
  checked[index] = !checked[index];
  this.setState({checked});

  this.changePrice(checked[index], money, minuts);
}

changePrice = (states, money, minuts) => {
  if (states == false) {
    price -= money;
    time -= minuts;
  } else {
    price += money;
    time += minuts;
  }
  this.transferTime(time);
};

transferTime = (times) => {
  time_g = time;
  var hours_l = Math.floor(times / 60);
  var min = times - hours_l * 60;
  if (hours_l >= 1) {
    hours_g = hours_l;
    time_g = min;
    hours_str = 'час.';
  }
  else {
    hours_g = '';
    hours_str = '';
  }
}

render(){

  let {checked} = this.state;

    return(
      <View style = {styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style = {styles.titles}>Кузов</Text>
          <Text style = {styles.bottom_line}></Text>
          <CheckBox
            title = 'Кузов и пороги'
            checked = {checked[1]}
            onPress={() => this.changeState(1, 420, 15)}
          />
          <CheckBox
            title = 'Покрытие супервоском'
            checked = {checked[2]}
            onPress={() => this.changeState(2, 300, 2)}
          />
          <CheckBox
            title = 'Покрытие кузова "Жидкий кварц"'
            checked = {checked[3]}
            onPress={() => this.changeState(3, 390, 5)}
          />


          <Text style = {styles.titles}>Салон</Text>
          <Text style = {styles.bottom_line}></Text>
          <CheckBox
            title = 'Пылесос салона'
            checked = {checked[4]}
            onPress={() => this.changeState(4, 190, 5)}
          />
          <CheckBox
            title = 'Полировка пластика'
            checked = {checked[5]}
            onPress={() => this.changeState(5, 150, 5)}
          />


          <Text style = {styles.titles}>Дополнительные услуги</Text>
          <Text style = {styles.bottom_line}></Text>
          <CheckBox
            title = 'Мойка двигателя'
            checked = {checked[6]}
            onPress={() => this.changeState(6, 550, 15)}
          />
          <CheckBox
            title = 'Подкачка колес'
            checked = {checked[7]}
            onPress={() => this.changeState(7, 80, 4)}
          />
          <CheckBox
            title = 'Ручная мойка нано шампунем'
            checked = {checked[8]}
            onPress={() => this.changeState(8, 620, 20)}
          />
          <CheckBox
            title = 'Смывка дорож. реагента'
            checked = {checked[9]}
            onPress={() => this.changeState(9, 1100, 50)}
          />
        </ScrollView>
        <Text style = {styles.bottom_line}></Text>
        <Text style = {styles.titl}>Итого: {price} {"руб."}</Text>
        <Text style = {styles.titl}>Время: {hours_g} {hours_str} {time_g} {"мин."}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
		justifyContent: 'center',
		padding: 20,
    height: height - 40
	},
  contentContainer:{

  },
  titles:{
    paddingBottom: 10,
    alignItems: 'center',
    fontSize: 20,
  },
  bottom_line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  titl:{
    paddingBottom: 10,
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Services;
