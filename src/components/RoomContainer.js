import React from "react";
import RoomsFilter from "./RoomsFilter";
import { RoomConsumer } from "./../context";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
}

export default RoomContainer;
