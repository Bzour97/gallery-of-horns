import React from 'react';
import HornedBeasts from './HornedBeasts'
import Data from '../assest/data.json'

class Main extends React.Component {

    render() {
        const Gallery = Data.map ( element => {
            return(        
            <HornedBeasts
            image_url = { element.image_url }
            title = { element.title }
            description = { element.description }
            />)
        })
        return (
            <main>
                {
                    Gallery
                }
                
            </main>
        )
    }
}

export default Main;