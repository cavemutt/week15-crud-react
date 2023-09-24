import React from 'react'
import { NewRoomForm } from './NewRoomForm'


export const House = (props) => {
    const { house, updateHouse } = props
    // console.log('house ', house)

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter(x => x._id !== roomId )
        }
        updateHouse(updatedHouse)
    }

    const addNewRoom = (room) => {
        return updateHouse({...house, rooms: [...house.rooms, room]})
    }

    const rooms = () => {
        return (
        <ul> 
            {(house.rooms).map((room, i) => {
                return (
                <li key={i}>
                    <span>{`${room.name} Area: ${room.area}`}</span>
                    <button onClick={e => deleteRoom(room._id)}>delete</button>
                </li>
                )
            })}
        </ul>

        )
    }

    return (
        <div>
            <h1>{house.name}</h1>
            <p>
            {
                rooms({rooms, houseId: house._id, deleteRoom})
            }
            </p>
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )
}