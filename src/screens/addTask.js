import React, {Component} from 'react';
import {Modal, Picker, Image, Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

import ItemsCategory from '../Data/categoryData';

class ModalExample extends Component {
  
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  items = () => {
      let item  = []
      for(let i = 0; i<ItemsCategory.length; i++){
        item.push(
          <Picker.item key={i} label={ItemsCategory[i].category} value={ItemsCategory[i].category} />
        )
      }
      return item
    }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.20)', alignItems:'center', justifyContent:'center' }}>
            <View style={{backgroundColor:'#FFF', borderRadius:5, width:'70%', height:250, padding:10, elevation:3 }}>
              <View>
                <TextInput style={styles.textInput} placeholder='Task Title'/>
                <TextInput style={styles.textInput} placeholder='Detail..'/>
              </View>
              <View style={{width:'90%', marginLeft:20, marginTop:20}}>
                <Picker
                  style={{elevation:2}}
                  selectedValue={this.state.category}
                  onValueChange = {this.updateCategory}
                >
                  <Picker.Item label="ADD NEW CATEGORY" value="" />
                  {this.items()}
                </Picker>
              </View>
              <View >
                <TouchableOpacity
                  style={{alignSelf:'flex-end', top:20, right: 80}} 
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{alignSelf:'flex-end', top:-4, right: 10}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </Modal>
        <TouchableOpacity 
            onPress={() => { this.setModalVisible(true) }}
            style={{flexDirection:'row', justifyContent:'center', alignItems:'center', padding:10, backgroundColor:'orange', position:'absolute', borderRadius:50, bottom:20, right:15, elevation:4}}
          >
            <Image 
              source={ require('../assets/add-default.png') }
              style={{height:40, width:40}}
            />
            <Text style={{fontSize:20, marginLeft:4}}>
              Add Task
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    top: 14,
    borderBottomWidth:1,
    borderColor:'#2ED1A2',
    marginLeft:25,
    marginRight:25,
    marginTop:5,
    fontSize:17
  }
})

export default ModalExample;