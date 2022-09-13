import { Component } from 'react';
import Card from 'react-bootstrap/Card';





// card singola come da nome dove renderizziamo le singole info di ogni gioco 


class SingleCard extends Component {


    render() {
        return (
            <Card style={{ width: '100%' }} >
                <Card.Img variant="top" src={this.props.game.thumbnail} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{this.props.game.title}</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                        {this.props.game.short_description}
                    </Card.Text>       
                </Card.Body>
            </Card >
        )
    }
}





export default SingleCard