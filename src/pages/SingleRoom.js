import React, { Component } from "react";
import defaultBcg from "./../images/room-1.jpeg";
import { RoomContext } from "./../context";
export class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    let { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    return <div>SingleRoom</div>;
  }
}

export default SingleRoom;
