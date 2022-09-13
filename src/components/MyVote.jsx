import { Form } from 'react-bootstrap'
import { useEffect, useState } from "react";





const MyVote = () => {

    const [gameVote, setGameVote] = useState([''])

    useEffect(() => {
        console.log({gameVote})
        localStorage.setItem({gameVote}, JSON.stringify(gameVote));
      }, [gameVote]) // <-- come un componentDidUpdate!

  
    return (

        <>
                        <Form.Group>
                            <Form.Label>Vota il tuo gioco:</Form.Label>
                            <Form.Control
                                as="select"
                                value ={gameVote} 
                                onChange={(gameVote) => setGameVote(gameVote.target.value)}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

        </>
    );
}


export default MyVote




