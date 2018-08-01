import React from 'react';
import UserProfileComponent from './UserProfileComponent';

function FriendJoined(data) {
  const { fullName } = data;
  const subTitle = `Your friend ${fullName} joined Spreadshare today`;
  const title = 'A Friend Joined';
  const props = { ...data, title, subTitle };
  return <UserProfileComponent {...props} />;
}

export default FriendJoined;
