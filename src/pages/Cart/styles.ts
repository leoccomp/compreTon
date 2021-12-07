import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '20%',
    minHeight: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    marginRight: 10,
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  button: {
    backgroundColor: '#008000',
  },
  removeButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    padding: 10,
  },
  labels: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 5,
    minHeight: 30,
  },
  price: {
    color: '#008000',
    textAlign: "right",
    fontSize: 14,
    fontWeight: '900'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: '5%',
  },
  name: {
    textAlign: "left",
    fontWeight: '900',
    minHeight: 40,
    fontSize: 14
  },
  welcome: {
    flexDirection: 'row',
    minHeight: 60,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#008000',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default styles;