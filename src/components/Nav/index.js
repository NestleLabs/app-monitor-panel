import React from 'react';
import Avatar from './Avatar';

const avatar_url = "https://avatars3.githubusercontent.com/u/9990676?v=4&u=a16c6d29f262e32f2ad8b344b72bb0b0305dc4a5&s=400";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <a href="https://github.com/matrixbirds">
          <Avatar src={avatar_url} className="avatar" alt="avatar is unavaliable" />
        </a>
      </div>
    );
  }
}

export default Nav;
