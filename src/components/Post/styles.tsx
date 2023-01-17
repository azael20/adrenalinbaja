import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    paddingHorizontal: '4%',
    paddingVertical: '5%',
  },
  username: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  location: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#FF6666',
    alignItems: 'center',
    marginBottom: 10,
    padding: 6,
    elevation: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  rightContainer: {
    zIndex: 10,
    top: '8%',
    alignSelf: 'flex-end',
  },
  iconContainer: {
    margin: 10,
    alignItems: 'center',
  },
  textMenu: {
    color: 'white',
    fontSize: 11.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 12,
  },
});

export default styles;
