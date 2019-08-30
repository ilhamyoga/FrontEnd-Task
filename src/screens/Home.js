import React,{Component} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity, Image, ActivityIndicator, CheckBox, Alert} from 'react-native';
import { getTodosItem, deleteTask } from '../publics/actions/todos'
import { getCategoryItem } from '../publics/actions/category'
import { connect } from 'react-redux';
import CircleCheckBox from 'react-native-circle-checkbox'
import Modal from "./addTask";

class listData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      categoryPick: ''
    };
  }

  componentDidMount = () => {
    this.props.dispatch(getTodosItem())
    this.props.dispatch(getCategoryItem())
  }

  taskComplete = (key) => {
    console.warn("data", key)
    if (this.state.complete) {
      this.setState({ complete: true });
    } 
    else {
      this.setState({ complete: false });
    }
  };

  pickCategory = (category) => {
    if (this.category) {
      this.setState({ categoryPick: categoryPick });
    } 
    else {
      this.setState({ complete: false });
    }
  };

  confirmDeleteTask(id){
    //handler for Long Click
    Alert.alert(
      'Warning !',
      'Are you sure delete this data ?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => this.deleteDataTask(id)},
      ],
      {cancelable: false},
    );
  }

  deleteDataTask(id) {
    this.props.dispatch(deleteTask(id))
  }

  render(){
    return(
      <View style={{flex: 1, paddingTop:30, padding:20}}>
        <View style={{flex:1}}>
          <Text style={{fontSize:30, fontFamily: 'Arial', fontWeight:'bold', color:'#003333', marginBottom: 10}}>Write Your Task</Text>
          {
            this.props.category.isLoading ?
            <ActivityIndicator size="large"/> : 
            (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.props.category.data}
              renderItem={({ item, index }) => (
                <TouchableOpacity 
                  style={[styles.card,
                    {backgroundColor:
                      (item.category == 'Desain')? '#2FC2DF' :
                      (item.category == 'Work')? '#C0EB6A' :
                      (item.category == 'Wishlist')? '#FAD06C' :
                      (item.category == 'Learning' )? 'blue' :
                      (item.category == 'Project' )? '#d186c0' : '#777'
                    }
                  ]}
                  onPress={() => this.pickCategory(item.category)}
                  onLongPress={() => this.confirmDeleteTask(item.key)}
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
                      <Text style={{color:'lightseagreen'}} numberOfLines={1}>Total Task 3</Text>
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
            (this.props.category.isLoading && this.props.todos.isLoading) ? 
            <ActivityIndicator size="large"/> : 
            (
            <FlatList
              style={styles.list}
              showsVerticalScrollIndicator={false}
              data={this.props.todos.data}
              renderItem={({ item, index }) => (
                <View style={{flex:1, flexDirection: 'row', alignItems:'center', marginBottom:15}}>
                  <CheckBox
                    style={{backgroundColor:'#68ed02', color:'#fff'}} 
                    value={item.finish}
                    onChange={()=>this.taskComplete(item.key)}/> 
                  <TouchableOpacity
                    style={{marginLeft:20, flex:1}}
                    onPress={() => this.props.navigation.navigate('EditTask', item)}
                    onLongPress={() => this.confirmDeleteTask(item.key)}
                  >
                    <View style={{}}>
                      {
                        (item.finish) ?
                          <View>
                            <Text style={{fontWeight: 'bold', fontSize: 19, textDecorationLine: 'line-through'}} numberOfLines={1}>{item.taskTitle}</Text>
                            <Text style={{color:'lightseagreen', fontSize: 18, textDecorationLine: 'line-through'}} numberOfLines={1}>{item.detail}</Text>
                          </View> :
                        (
                          <View>
                            <Text style={{fontWeight: 'bold', fontSize: 19 }} numberOfLines={1}>{item.taskTitle}</Text>
                            <Text style={{color:'lightseagreen', fontSize: 18}} numberOfLines={1}>{item.detail}</Text>
                          </View>
                        )
                      }
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
    category: state.category,
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