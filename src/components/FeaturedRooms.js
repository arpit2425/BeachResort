import React, { Component } from "react";
import { RoomContext } from "../context";
export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms } = this.context;
    console.log(featuredRooms);
    return <div></div>;
  }
}

export default FeaturedRooms;
