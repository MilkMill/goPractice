import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
} from 'react-native';

class Input extends Component {

    state = {
        myInput: ''
    }

    onChangeInput = (value) => {
        this.setState({
            myInput: value
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
                maxLength={10}
                editable={true}
                autoCapitalize={'words'}
                />
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
  });

export default Input;