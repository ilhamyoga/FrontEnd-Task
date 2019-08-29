import React,{Component} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { getTodosItem } from '../publics/actions/todos'
import { connect } from 'react-redux';
import items from '../Data/categoryData';
import itemsTask from '../Data/taskData';
import CircleCheckBox from 'react-native-circle-checkbox'
import Modal from "./addTask";

class listData extends Component{

  getDataTodos = () => {
    this.props.dispatch(getTodosItem())
  }

  componentDidMount = () => {
    this.getDataTodos()
  }

  render(){
    console.log("data", this.props.todos)
    return(
      <View style={{flex: 1, paddingTop:30, padding:20}}>
        <View style={{flex:1}}>
          <Text style={{fontSize:30, fontFamily: 'Arial', fontWeight:'bold', color:'#003333', marginBottom: 10}}>Write Your Task</Text>
          {
            this.props.todos.isLoading ?
            <ActivityIndicator size="large"/> : 
            (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={items}
              renderItem={({ item, index }) => (
                <TouchableOpacity 
                  style={styles.card}
                  onPress={() => this.props.navigation.navigate('ShowTask', item)}
                >
                  <View style={{flex:1, height:'50%', justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.imageView}>
                      <Image 
                        source={ require('../assets/default-category.png') }
                        style={{height:40, width:40}}
                      />
                    </View>
                    <View style={styles.titleView}>
                      <Text style={{fontWeight: 'bold', fontSize: 18}} numberOfLines={1}>{item.category}</Text>
                    </View>
                    <View style={styles.detailView}>
                      <Text style={{color:'lightseagreen'}} numberOfLines={1}>{item.detail}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item,index)=>index.toString()}
            />
            )
          }
        </View>

        <View style={{flex:2.3}}>
          <Text style={{fontSize:15, fontFamily: 'Arial', fontWeight:'bold', color:'gray', marginBottom: 10}}>YOUR TASKS</Text>
          {
            this.props.todos.isLoading ? 
            <ActivityIndicator size="large"/> : 
            (
            <FlatList
              style={styles.list}
              showsVerticalScrollIndicator={false}
              data={this.props.todos.data}
              renderItem={({ item, index }) => (
                <View style={{flex:1, flexDirection: 'row', alignItems:'center', marginBottom:15}}>
                  <CircleCheckBox
                    checked={item.finish}
                    onToggle={(checked) => console.log(checked)}
                  /> 
                  <TouchableOpacity
                    style={{marginLeft:20, flex:1}}
                    onPress={() => this.props.navigation.navigate('ShowTask', item)}
                  >
                    <View style={{}}>
                      <Text style={{fontWeight: 'bold', fontSize: 19}} numberOfLines={1}>{item.taskTitle}</Text>
                    </View>
                    <View style={{}}>
                      <Text style={{color:'lightseagreen', fontSize: 18}} numberOfLines={1}>{item.detail}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item,index)=>index.toString()}
            />
            )
          }
        </View>
        <Modal/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#60D5CB',
    padding:11,
    borderRadius: 12,
    maxHeight: 120,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5
  },
  list: {
    marginLeft: 5,
    marginRight: 5
  },
  imageView: {
    width:'100%',
    alignItems:'center'
  },
  titleView: {
    width:'100%',
    alignItems:'center'
  },
  categoryView: {
    width:'100%',
    color: 'cyan'
  },
  text: {
    fontWeight: 'bold',
    color: '#000'
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  console.log('State:', state);
  return {
    todos: state.todos,
  };
};

// // Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
// const mapDispatchToProps = (dispatch) => {
//   // Action
//     return {
//       onFetchTodos: () => {                        
//         dispatch(fetchTodosAction());
//       }, 
//       onAddTodo: (newTodo) => {                        
//           dispatch(addTodoAction(newTodo));
//       }
//    };
// };

export default connect(mapStateToProps)(listData);