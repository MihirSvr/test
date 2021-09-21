import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{ height: 10, backgroundColor: 'red', width: 20 }} onStartShouldSetResponder={() => alert('Test')} >

      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
