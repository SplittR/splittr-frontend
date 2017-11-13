import { StyleSheet } from 'react-native';

const MemberStyles = StyleSheet.create({
  memberName: {
    width: 100,
    fontWeight: "700",
    fontSize: 15,
    width:100
  },
  expense: {
    width: 100,
    textAlign: 'left',
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: '#83a4d4',
    borderRadius: 15,
    margin: 2,
    borderWidth: 0.25,
    borderColor: '#8BBFC2',
    width: 120
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  listContainer: {
    flexDirection: 'column',
  },
});

export default MemberStyles;
