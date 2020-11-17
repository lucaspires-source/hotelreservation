import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from '../components/Loading'
export default class FeaturedRooms extends Component {

    static contextType = RoomContext;
    render() {
        const {featuredRooms : rooms} = this.context
        console.log(rooms)

        return (
            <div>
                <h1> O pai ta on</h1>
                <Loading/>
            </div>
        )
    }
}
