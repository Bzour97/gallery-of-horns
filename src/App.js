import "./App.css";
import React from "react";
import Main from './components/Main'
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './assest/data.json'
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            show: false,
            ChoosenBeast: []
        });
        console.log(Data[0])
    }

    handleDisplay = () => {
        this.setState({ show: !this.state.show })
    }

    filterBeast = (src) => {
        let ourTarget ;
        Data.forEach(element => {
            if(element.image_url === src){
                ourTarget=element; 
            }
        });

        this.setState({ ChoosenBeast: ourTarget });       
    }

    render() {
        return (
            <div>
                <Header />

                <Main
                    Data={Data}
                    handleDisplay={this.handleDisplay}
                    filterBeast={this.filterBeast}
                    show={this.state.show}
                    ChoosenBeast={this.state.ChoosenBeast}
                />
                
                <Footer />
            </div>
        )
    }
}

export default App;