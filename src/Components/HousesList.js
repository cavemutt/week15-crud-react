
import React from 'react'
import { House } from './House' 
import { housesApi } from './HousesApi' 

export default class HousesList extends React.Component {
    state = {
        houses: []
    }

    componentDidMount() {
        this.fetchHouses()
    }

    fetchHouses = async () => {
        const houses = await housesApi.get()
        this.setState({ houses })
    }

    addHouse = async (houseName) => {
        console.log(houseName)
    }

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse)
        this.fetchHouses()
    }

    deleteHouse = async (houseId) => {
        await housesApi.delete(houseId)
        this.fetchHouses()
    }

    render() {
        return (
            <div>
                {this.state.houses.map((house) => {
                    return (
                    <>
                    <House 
                    house={house} 
                    key={house._id}
                    updateHouse={this.updateHouse}
                    deleteHouse={this.deleteHouse}
                    />
                    <button onClick={e => {this.deleteHouse(house._id)}}>delete house</button>
                    </>

                    )

                } 
                    
                    )}
            </div>
        )
    }
}
