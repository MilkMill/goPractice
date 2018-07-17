import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    ScrollView,
} from 'react-native';

class Input extends Component {

    state = {
        myInput: '',
        users: ['John','James', 'Francis', 'Lisa', 'Steve', 'Martha'],
    }

    onChangeInput = (value) => {
        this.setState({
            myInput: value
        })
    }

    onAddUser = () => {
        this.setState(prevState => {
            return {
                myInput: '',
                users:[...prevState.users, prevState.myInput]
            }
        })
    }

    render() {
        return(
            
            <View style={styles.inputWrapper}>
                <TextInput
                style={styles.input}
                value={this.state.myInput}
                onChangeText={this.onChangeInput}
                multiline={true}
                maxLength={100}
                editable={true}
                autoCapitalize={'words'}
                />
            <Button 
            title='Add User'
            onPress={this.onAddUser}
            />
            <ScrollView>
                <View>
            {
                this.state.users.map(item => (
                    <Text style={styles.users} key={item}>{item}</Text>
                ))
            }
                </View>
            </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',

    },
    input: {
      backgroundColor: '#eaeaea',
      alignItems: 'center',
      padding: 10,
      width: '100%',
      borderBottomWidth: 2,
      borderBottomColor: '#dddddd',
      marginTop: 20,
      fontSize: 20,
      padding: 10
    },
    users: {
        fontSize: 40,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 20
    }
  });

export default Input;