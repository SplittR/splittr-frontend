import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
  View
} from 'react-native';
import  Member  from './member';
import MemberListStyles from '../Styles/memberListStyles'

class MemberList extends Component {
  render() {
    const { navigate, members, groupId, settledUp } = this.props;
    return(
      <View style={MemberListStyles.deco}>
        {members.map(function(member, index) {
          return(
            <Member settledUp={settledUp} groupId={groupId} member={member} key={index} navigate={navigate}/>
          )
        })}
      </View>
    )
  }
}
export default MemberList ;
