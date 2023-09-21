import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  background: {
    backgroundColor: '#000',
    flex: 1,
  },
  currentResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginHorizontal: 32,
    marginBottom: 16,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  opperandButton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#505050',
  },

  zeroButton: {
    height: 80,
    width: 180,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 28,
    marginHorizontal: 10,
    backgroundColor: '#505050',
  },

  opperationButton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#ff9427',
  },

  opperationButtonActive: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },

  zeroButtonNumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
  },

  opperandButtonNumber: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },

  specialButtonNumber: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },

  OperationButtonTextActive: {
    color: '#ff9427',
    fontSize: 30,
    textAlign: 'center',
  },

  clearButton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#9b9b9b',
  },
  currentOpperation: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    marginHorizontal: 20,
  },
});
