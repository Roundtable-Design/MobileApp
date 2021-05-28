import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

//  edit/create page
//    title field
//    description field
//    content field


export default function Edit() {
    const [title, onChangeTitle] = React.useState();
    const [description, onChangeDescription] = React.useState();
    const [content, onChangeContent] = React.useState();

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Here you can edit your records</Text>
        <TextInput
                style={styles.input}
                onChangeTitle={onChangeTitle}
                value={title}
                placeholder="Entry title"
        />
        <TextInput
                style={styles.input}
                onChangeDescription={onChangeDescription}
                value={description}
                placeholder="Entry description"
        />
        <TextInput
                style={styles.input}
                onChangeContent={onChangeContent}
                value={content}
                placeholder="Entry content"
        />

        <Button title="Edit" />
        <View style={styles.navbar}>
            <Link style={styles.navItem} to="/"><Text>go Home</Text></Link>
        </View>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 50,
    alignItems: 'center',
    textAlign:'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth:1,
    width: '100%',
    textAlign:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbar:{
    position: 'absolute',
    bottom: 10,
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    width: '100%',
  }
});
