const ownedCards = [
    { id: 1, name: 'Develop', image: 'https://opengameart.org/sites/default/files/styles/medium/public/coruscant_by_night_by_jfliesenborghs-d93rhyn_500.jpg', flavor_text: 'Level the playing field', is_special: true, role: 'env', strength: 0, ability: 'develop' },
    { id: 2, name: 'Cold of Space', image: 'https://picsum.photos/200/300', flavor_text: 'So cold...', is_special: true, role: 'env', strength: 0, ability: 'cold' },
    { id: 3, name: "Rocky Terrain", image: 'https://picsum.photos/200/300', flavor_text: "Too many rocks!", is_special: true, role: 'env', strength: 0, ability: 'rocky' },
    { id: 4, name: "Solar Flare", image: 'https://picsum.photos/200/300', flavor_text: "Solar Flare, get to the surface!", is_special: true, role: 'env', strength: 0, ability: 'flare' },
    { id: 5, name: "Drone", image: 'https://picsum.photos/200/300', flavor_text: "Stupid hunk of junk...", is_special: true, role: 'foot', strength: 0, ability: 'decoy' },
    { id: 6, name: "Talon Fighter", image: 'https://icon-library.com/images/pngtree-spacecraftspaceshipshipspacealien-line-icon--vector-isol-png-image_310939.jpg', flavor_text: "It feels weird to shoot at the moon", is_special: false, role: 'space', strength: 6, ability: null },
    { id: 7, name: "Space Marine", image: 'https://picsum.photos/200/300', flavor_text: "Here I was thinking I'd end up in Hawaii", is_special: false, role: 'foot', strength: 4, ability: 'close-combat' },
    { id: 8, name: "Talon Bomber", image: 'https://picsum.photos/200/300', flavor_text: "Ok this feels a little unfair...", is_special: false, role: 'space', strength: 8, ability: 'overwhelm' },
    { id: 9, name: "Talon Skiff", image: 'https://picsum.photos/200/300', flavor_text: "They won't even see us coming", is_special: false, role: 'ground', strength: 5, ability: 'overwhelm' },
    { id: 10, name: 'The Red Blur', image: 'https://picsum.photos/200/300', flavor_text: "This better have a decent payout", is_special: false, role: 'ground', strength: 6 },
    { id: 11, name: 'Repair Ship', image: 'https://picsum.photos/200/300', flavor_text: "If you didn't fly so badly, you wouldn't need us", is_special: false, role: 'space', strength: 5, ability: 'revive' },
    { id: 12, name: 'Brave Pilot', image: 'https://picsum.photos/200/300', flavor_text: "Follow me to victory", is_special: false, role: 'space', strength: 1, ability: 'inspire' },
    { id: 13, name: 'Mag Bike', image: 'https://picsum.photos/200/300', flavor_text: "To be honest, this is more of a canon than a bike", is_special: false, role: 'ground', strength: 5 },
    { id: 14, name: 'Envoy Teron', image: 'https://picsum.photos/200/300', flavor_text: "I wish he'd just go back to Iowa already", is_special: false, role: 'foot', strength: 5, ability: 'spy' },
    { id: 15, name: 'Miner A', image: 'https://picsum.photos/200/300', flavor_text: "You think this is bad, try spending a day working the lunar core", is_special: false, role: 'foot', strength: 1 },
    { id: 16, name: 'Miner B', image: 'https://picsum.photos/200/300', flavor_text: "Maybe we'll finally get paid?", is_special: false, role: 'foot', strength: 1 },
    { id: 17, name: "Lunar Citizen", image: 'https://picsum.photos/200/300', flavor_text: "I can't TAKE IT ANYMORE", is_special: false, role: 'foot', strength: 1 },
    { id: 18, name: "Jury rigged mining cart", image: 'https://picsum.photos/200/300', flavor_text: "I can't believe this works", is_special: false, role: 'ground', strength: 4 },
    { id: 19, name: "Old Era Rover", image: 'https://picsum.photos/200/300', flavor_text: "Hey, look what I found!", is_special: false, role: 'ground', strength: 4 },
    { id: 20, name: "Sheil", image: 'https://picsum.photos/200/300', flavor_text: 'REVOLUTION!', is_special: false, role: 'foot', strength: 5 },
    { id: 21, name: "Rachel the Rager", image: 'https://picsum.photos/200/300', flavor_text: 'Oh YEAH baby', is_special: false, role: 'ground', strength: 5 },
    { id: 22, name: "Talon Frigate", image: 'https://picsum.photos/200/300', flavor_text: "We FINALLY get to use these guns", is_special: false, role: 'space', strength: 6 },
    { id: 23, name: "ID XQYZ24", image: 'https://picsum.photos/200/300', flavor_text: "You sure you know how to fly this thing?", is_special: false, role: 'space', strength: 6 },
    { id: 24, name: "Dr. Algo", image: 'https://picsum.photos/200/300', flavor_text: "This is all my fault...", is_special: false, role: 'foot', strength: 5, ability: 'spy' },
    { id: 25, name: "Freedom Fighter", image: 'https://picsum.photos/200/300', flavor_text: 'I hope I can put this on my resume', is_special: false, role: 'foot', strength: 2 },
    { id: 26, name: "Exosuit Miner", image: 'https://picsum.photos/200/300', flavor_text: "I feel like a GOD", is_special: false, role: 'foot', strength: 5 },
    { id: 27, name: 'Drew MoonWalker', image: 'https://picsum.photos/200/300', flavor_text: "Do ya'll have any beer?", is_special: false, role: 'foot', strength: 10, ability: 'mock' },
]

export const initialState = {
    //login
    usernameInput: '',
    passwordInput: '',
    user: { username: "TEST" },
    ownedCards: ownedCards,
    games: [],

    //gameboard
    gameOn: false,
    gameStart: false,
    drawHands: false,
    gameCards: [],
    enemyGameCards: [],
    hand: [],
    enemyHand: [],
    userDiscard: [],
    enemyDiscard: [],
    enemyField: {
        space: [],
        ground: [],
        foot: [],
        other: []
    },
    userField: {
        space: [],
        ground: [],
        foot: [],
        other: []
    },
    env: [],

    //scores 
    userScore: 0,
    enemyScore: 0,

    //passing
    userTurn: true,
    userPass: false,
    enemyPass: false,

    //reactors 
    userReactors: 2,
    enemyReactors: 2,

    userVictory: null
}


const rowScore = (array) => {
    let score = 0
    for (let i = 0; i < array.length; i++) {
        score += array[i].strength
    }
    return score
}

const newTotalScore = (field) => {
    //we iterate through the field values (rows), and get the total of each rowScore
    let total = Object.values(field).reduce((total, row) => total + (rowScore(row)), 0)
    return total
}


export const reducer = (state, action) => {
    switch (action.type) {

        case 'CHANGE_USERNAME_INPUT':
            return { ...state, usernameInput: action.value }
            break;

        case 'CHANGE_PASSWORD_INPUT':
            return { ...state, passwordInput: action.value }
            break;

        case 'SET_USER':
            return { ...state, user: action.user, ownedCards: action.ownedCards, games: action.games }
            break;

        case 'START_GAME':
            return { ...state, gameOn: true }
            break;

        case 'SET_GAME_CARDS':
            return { ...state, gameCards: action.gameCards }
            break;

        case 'SET_ENEMY_GAME_CARDS':
            return { ...state, enemyGameCards: action.enemyGameCards, drawHands: true }
            break;

        case 'SET_HANDS':
            //Separate from game cards because hand is drawn in the battlefield, not the selection screen

            let newHand = state.gameCards.slice(0, 10)
            let newEnemyHand = state.enemyGameCards.slice(0, 10)

            let newGameCards = state.gameCards.filter(card => !(newHand.includes(card)))
            let newEnemyGameCards = state.enemyGameCards.filter(card => !(newEnemyHand.includes(card)))
            return {
                ...state,
                gameStart: true,
                gameCards: newGameCards,
                enemyGameCards: newEnemyGameCards,
                hand: newHand,
                enemyHand: newEnemyHand,
                drawHands: false
            }
            break;

        case 'PLAY_CARD':

            let role = action.role

            //Remove the card from hand
            let updatedUserHand = state.hand.filter(card => card.id !== action.card.id)

            //Update the row, then update the field with that updated row 
            let updatedUserRow = [...state.userField[role], action.card]
            let updatedUserField = { ...state.userField, [role]: updatedUserRow }

            //Find the new total, including the added card
            let newUserTotal = newTotalScore(updatedUserField)
            return { ...state, userField: updatedUserField, hand: updatedUserHand, userScore: newUserTotal }
            break;

        case 'PLAY_ENV':
            //check to see if env already has that condition
            let conditions = state.env.map(card => card.ability)
            if (conditions.includes(action.card.ability)) {
                return {
                    ...state,
                    userDiscard: [...state.userDiscard, action.card],
                    hand: state.hand.filter(card => card.id !== action.card.id)
                }
            }
            else {
                return {
                    ...state,
                    env: [...state.env, action.card],
                    hand: state.hand.filter(card => card.id !== action.card.id)
                }
            }

        case 'ENEMY_PLAY':
            let randomCard
            let chosenCard
            if (state.enemyHand.length > 1) {
                randomCard = Math.floor(Math.random() * Math.floor(state.enemyHand.length))
                chosenCard = state.enemyHand[randomCard]
            }
            else {
                if (state.userScore >= state.enemyScore) {
                    chosenCard = state.enemyHand[0]
                }
                else {
                    return { ...state, enemyPass: true }
                }
            }

            if (chosenCard.role === 'env') {
                let conditions = state.env.map(card => card.ability)
                if (conditions.includes(chosenCard.ability)) {
                    return {
                        ...state,
                        enemyDiscard: [...state.enemyDiscard, chosenCard],
                        enemyHand: state.enemyHand.filter(card => card.id !== chosenCard.id)
                    }
                }
                else {
                    return {
                        ...state,
                        env: [...state.env, chosenCard],
                        enemyHand: state.enemyHand.filter(card => card.id !== chosenCard.id)
                    }
                }
            }
            else {
                let updatedEnemyHand = state.enemyHand.filter(card => card.id !== chosenCard.id)

                let updatedEnemyRow = [...state.enemyField[chosenCard.role], chosenCard]
                let updatedEnemyField = { ...state.enemyField, [chosenCard.role]: updatedEnemyRow }

                let newEnemyTotal = newTotalScore(updatedEnemyField)
                return { ...state, enemyField: updatedEnemyField, enemyHand: updatedEnemyHand, enemyScore: newEnemyTotal }
            }
            break;

        case 'ENEMY_PASS':
            return { ...state, enemyPass: true, userTurn: true }
            break;

        case 'USER_PASS':
            return { ...state, userPass: true }
            break;

        case 'END_TURN':
            return { ...state, userTurn: !(state.userTurn) }

        case 'ROUND_OVER':
            if (state.userScore >= state.enemyScore) {
                return { ...state, enemyReactors: (state.enemyReactors - 1) }
            }
            else if (state.userScore < state.enemyScore) {
                return { ...state, userReactors: (state.userReactors - 1) }
            }
            break;

        case 'RESET_BOARD':
            //This is super ugly but it works. We're setting the discard to everything in userField
            //And then we're hardcoding in new clean fields
            let newUserDiscard = Object.values(state.userField).splice(0).flat();
            let newEnemyDiscard = Object.values(state.enemyField).splice(0).flat();
            let cleanUserField = {
                userField: {
                    space: [],
                    ground: [],
                    foot: [],
                    other: []
                }
            }
            let cleanEnemyField = {
                enemyField: {
                    space: [],
                    ground: [],
                    foot: [],
                    other: []
                }
            }
            return {
                ...state,
                userField: cleanUserField.userField,
                enemyField: cleanEnemyField.enemyField,
                userPass: false,
                enemyPass: false,
                userTurn: (state.userScore >= state.enemyScore ? true : false),
                env: [],
                userDiscard: [...state.userDiscard, ...newUserDiscard],
                enemyDiscard: [...state.enemyDiscard, ...newEnemyDiscard],
                userScore: 0,
                enemyScore: 0
            }
            break;

        case 'GAME_OVER':
            return {
                ...state,
                userVictory: action.userVictory,
                games: action.games,
                userReactors: 2,
                enemyReactors: 2,
                env: [],
                gameOn: false,
                gameStart: false,
                userPass: false,
                enemyPass: false,
                userDiscard: [],
                enemyDiscard: []
            }
            break;


        // ABILITIES 

        case 'DEVELOP':
            console.log(action.userField)
            console.log(action.oldStrength)
            let developedUserFoot = state.userField.foot.map(card => {
                if (card.id === action.card.id) {
                    console.log(card.strength, action.oldStrength)
                    card.strength = action.oldStrength
                    console.log(card.strength, action.oldStrength)
                };
                return card
            })
            let developedUserGround = state.userField.ground.map(card => {
                if (card.id === action.card.id) {
                    card.strength = action.oldStrength
                };
                return card
            })
            let developedUserSpace = state.userField.space.map(card => {
                if (card.id === action.card.id) {
                    card.strength = action.oldStrength
                };
                return card
            })
            let developedEnemyFoot = state.enemyField.foot.map(card => {
                if (card.id === action.card.id) {
                    card.strength = action.oldStrength
                };
                return card
            })
            let developedEnemyGround = state.enemyField.ground.map(card => {
                if (card.id === action.card.id) {
                    card.strength = action.oldStrength
                };
                return card
            })
            let developedEnemySpace = state.enemyField.space.map(card => {
                if (card.id === action.card.id) {
                    card.strength = action.oldStrength
                };
                return card
            })

            let developedUserField = { ...state.userField, foot: developedUserFoot, ground: developedUserGround, space: developedUserSpace }
            let developedEnemyField = { ...state.enemyField, foot: developedEnemyFoot, ground: developedEnemyGround, space: developedEnemySpace }

            return { ...state, env: [], userField: developedUserField, enemyField: developedEnemyField }
            break;

        case 'COLD':
            //change a card's strength to 1 if it's in the field, in the foot row 
            let coldRow = state.userField.foot.map(card => {
                if (card.id === action.card.id) {
                    card.strength = 1
                };
                return card
            })
            let coldEnemyRow = state.enemyField.foot.map(card => {
                if (card.id === action.card.id) {
                    card.strength = 1
                };
                return card
            })
            let coldUserField = { ...state.userField, foot: coldRow }
            let coldEnemyField = { ...state.enemyField, foot: coldEnemyRow }

            return { ...state, userField: coldUserField, enemyField: coldEnemyField, userScore: newTotalScore(coldUserField), enemyScore: newTotalScore(coldEnemyField) }
            break;

        case 'ROCKY':
            let rockyRow = state.userField.ground.map(card => {
                if (card.id === action.card.id) {
                    card.strength = 1
                };
                return card
            })
            let rockyEnemyRow = state.enemyField.ground.map(card => {
                if (card.id === action.card.id) {
                    card.strength = 1
                };
                return card
            })
            let rockyUserField = { ...state.userField, ground: rockyRow }
            let rockyEnemyField = { ...state.enemyField, ground: rockyEnemyRow }

            return { ...state, userField: rockyUserField, enemyField: rockyEnemyField, userScore: newTotalScore(rockyUserField), enemyScore: newTotalScore(rockyEnemyField) }

        case 'FLARE':
            let flareRow = state.userField.space.map(card => {
                if (card.id === action.card.id) {
                    card.strength = 1
                };
                return card
            })
            let flareEnemyRow = state.enemyField.space.map(card => {
                if (card.id === action.card.id) {
                    card.strength = 1
                };
                return card
            })
            let flareUserField = { ...state.userField, space: flareRow }
            let flareEnemyField = { ...state.enemyField, space: flareEnemyRow }

            return { ...state, userField: flareUserField, enemyField: flareEnemyField, userScore: newTotalScore(flareUserField), enemyScore: newTotalScore(flareEnemyField) }

        default:
            return state
    }
}