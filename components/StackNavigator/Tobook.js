import React, {PureComponent} from 'react';
import { Text, View, TouchableHighlight, StyleSheet,
        Dimensions, Button, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

var {height, width} = Dimensions.get('window');

class Tobook extends PureComponent{

  constructor(props){
    super(props)
    this.state = new Date()
  }

  state = {Label: ""};

  render(){
    var today = new Date();
    stateData = moment().format('DD.MM.YYYY');
    var monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    var hours = today.getHours() + 1;
    var pick = [];
    if (stateData != this.state.date) {
      hours = 0;
    }
    for (var i = hours; hours < 24; i++) {
      let hours_end = hours + 1;
      let str = hours + ":00 - " + hours_end + ":00";
      pick.push(<Picker.Item label={str} value={str}  key={hours}/>);
      hours += 2;
    }

    return(
      <View style = {styles.container}>
        <Text style = {styles.titles} >{"Текущая дата:\t"} { today.getDate() + " " + monthes[today.getMonth()]
                        + " " + today.getFullYear() }</Text>
        <DatePicker
          style={{width: 320}}
          date={this.state.date}
          mode="date"
          placeholder="Выберите дату"
          format="DD.MM.YYYY"
          minDate={today}
          onDateChange={(date) => {this.setState({date: date})}}
        />

        <Picker selectedValue={this.state.Label}
          onValueChange={
          (value, index) => this.setState({
               Label: value}, () => { console.log(value, index)})}>
          { pick }
        </Picker>
        <Text> {"Выбранная дата:\t"}{this.state.date} </Text>
        <Text> {"Выбранное время:"}{this.state.Label}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.ViewsPress}>
          <Text>Забронировать</Text>
        </TouchableHighlight>
      </View>
    );
  }
  ViewsPress = () => {
		const {navigation: {navigate}} = this.props;
		navigate('Views');
	}
}

const styles = StyleSheet.create({
  container:{
		justifyContent: 'center',
		padding: 20
	},
  titles:{
    paddingBottom: 10,
    alignItems: 'center',
    fontSize: 20,
    textDecorationLine: 'underline'
  },
	button:{
    height: 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    marginTop: 20,
    borderRadius: 10,
	}
});

export default Tobook;
