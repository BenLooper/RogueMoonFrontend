import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import history from '../history'

function VictoryModal(props) {
    const dispatch = useDispatch();
    const userReactors = useSelector((state) => state.userReactors)
    const enemyReactors = useSelector((state) => state.enemyReactors)
    const games = useSelector((state) => state.games)

    const createGame = () => {
        // fetch('http://localhost:3000/games', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json",
        //         "Authorization": `Bearer ${window.localStorage.token}`
        //     },
        //     body: JSON.stringify({
        //         game_won: (userReactors > enemyReactors ? true : false)
        //     })
        // })
        //     .then(res => res.json())
        //     .then((userInfo) => {
        //         dispatch({
        //             type: 'GAME_OVER',
        //             userVictory: userInfo.newGame.game_won,
        //             games: userInfo.games
        //         })
        //     })
        dispatch({
            type: 'GAME_OVER',
            userVictory: userReactors > enemyReactors ? true : false,
            games: [...games, { game_won: (userReactors > enemyReactors ? true : false) }]
        })
        history.push('/')
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='game-over-modal'
        >
            <Container className='game-won-modal'>
                <Row>
                    <Col><h1 style={{ fontFamily: 'impact', color: 'green', textAlign: 'center' }}>Victory!</h1></Col>
                </Row>
                <Row>
                    <Col style={{ fontFamily: 'impact', fontSize: '35px', textAlign: 'center' }}>You've out-witted the AI, this colony is liberated!</Col>
                </Row>
                <Modal.Footer >
                    <Button style={{ fontFamily: 'impact', color: 'black' }} variant='success' onClick={createGame} className='game-over-button'>Return to Base</Button>
                </Modal.Footer>
            </Container>
        </Modal>
    );
}

export default VictoryModal