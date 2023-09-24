const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses"

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT)
            const data = await resp.json()
            return data
        } catch(err) {
            console.log('get error ', err)
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            })
            return await resp.json()
        } catch(err) {
            console.log('put error ', err)
        }
    }

    delete = async (houseId) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${houseId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await resp.json()

        } catch(err) {
            console.log('delete error ', err)
        }
    }
}

export const housesApi = new HousesApi()
