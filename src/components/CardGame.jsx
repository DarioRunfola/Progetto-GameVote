import { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SingleCard from "./SingleCard";
import MyVote from './MyVote';

// struttura portatnte dove andiamo a mappare i giochi così che possiamo avevre una stryttura a card a ordinata e responsive per la nostra app

class CardGame extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="justify-content-space-between">
                        {this.props.games.map((g) => (

                            <Col xs={12} md={3} key={g.id}>
                                <SingleCard game={g} />
                                <MyVote game={g} />
                            </Col>

                        ))

                        }

                    </Row>
                </Container>
            </>
        )





    }

}

export default CardGame