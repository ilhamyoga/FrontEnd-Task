import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Picker,
	StyleSheet,
	Image,
	ScrollView
} from 'react-native'

import { getCategoryItem } from '../publics/actions/category'
import { addTask } from '../publics/actions/todos'
import { connect } from 'react-redux';


class EditNote extends Component {
	constructor (props) {
		super(props)
		this.state = {
			key: this.props.navigation.state.params.key,
			taskTitle: this.props.navigation.state.params.taskTitle,
			detail: this.props.navigation.state.params.detail,
			category: this.props.navigation.state.params.category,
		}
	}

	editTodos = () => {
	}

	render() {
		return(
			<View>
				<ScrollView style={styles.ParentView}>
					<TextInput
						style={styles.title} 
						value={this.state.taskTitle}
						onChangeText= {text => this.setState({taskTitle:text})}
						placeholder="TITLE TASK ..." 
					/>
					<TextInput 
						style={styles.description}
						value={this.state.detail}
						multiline= {true}
						numberOfLines={10}
						onChangeText= {text => this.setState({detail:text})}
						placeholder="Detail ..." 
					/>
					<Picker
					  selectedValue={this.state.category}
					  style={{width: '100%'}}
					  onValueChange={text => this.setState({category:text})}
					>
					  <Picker.Item key={null} label="select category..." value={null} />
                        { this.props.category.data.map(data=>(
                            <Picker.Item label={data.category} value={data.id} key={data.id} />)
                        )}
					</Picker>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ParentView: {
		padding: 30,
	},
	title:{
		fontSize: 20,
		textAlignVertical: 'top'
	},
	description: {
		fontSize: 20,
		textAlignVertical: 'top'
	},
	picker: {
		height: 50, 
		width: 200,
		top: 10,
		borderWidth: 1,
	},
	header: {
		height: 60, 
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		backgroundColor: 'white',
		elevation: 7
	},
	center: {
		flex: 1, 
		alignItems: 'center',
	},
	left: {
		flex: 1,
	},
	right: {
		flex: 1,
		alignItems: 'flex-end',
	}
})

const mapStateToProps = ( state ) => {
	return {
		category: state.category
	}
}
export default connect(mapStateToProps)(EditNote);
