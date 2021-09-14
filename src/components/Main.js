import React from 'react';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from "./SelectedBeasts";

class Main extends React.Component {

    render() {

        const Gallary = this.props.Data.map(element => {
            return (
                <div>
                    <HornedBeasts
                        image_url={element.image_url}
                        title={element.title}
                        description={element.description}
                        handleDisplay={this.props.handleDisplay}
                        filterBeast={this.props.filterBeast}
                        ChoosenBeast={this.props.ChoosenBeast}
                    />
                </div>
            )
        })
        return (
            <main>
                
                {Gallary}
                <SelectedBeast
                    show={this.props.show}
                    handleDisplay={this.props.handleDisplay}
                    filterBeast={this.props.filterBeast}
                    ChoosenBeast={this.props.ChoosenBeast}
                />

            </main>
        )
    }
}

export default Main;