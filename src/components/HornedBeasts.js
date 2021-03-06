import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.favorites = '💓';
    this.state = { timeOfClick: 0 };
  }

  Click = (event) => {
    event.preventDefault()
    this.setState({ timeOfClick: this.state.timeOfClick + 1 });
    this.props.handleDisplay();
    this.props.filterBeast(this.props.image_url);
    console.log(this.props.image_url)
  }

  render() {
    return (
      <div>
        <Row xs={1} md={2} className = "test">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="Top" src={this.props.image_url} onClick={this.Click} width = '250'/>
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>

                    {this.props.description} {this.state.timeOfClick} {this.favorites}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
            
      </div>

    )
  }
}

export default HornedBeasts;