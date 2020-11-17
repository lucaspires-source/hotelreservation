import React, { Component } from 'react'

const RoomContext = React.createContext()

export default class RoomProvider extends Component {
    state={

    }
    
    render() {
        return (
            <RoomContext.Provider value="PAI TA ON"></RoomContext.Provider>
                

        )
    }
}
