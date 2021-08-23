import Card from './Card'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './../../store/store'
import { render } from '@testing-library/react'

let store = createStore(rootReducer, {
    favorite: [],
    jokes: []
})

describe('Card component', () => {
    it('should render correctly', () => {
        let store = createStore(rootReducer, {
            favorite: [],
            jokes: []
        })

        render(<Provider store={store}><Card /></Provider>)
    })

    it('should render correctly with joke', () => {
        let store = createStore(rootReducer, {
            favorite: [],
            jokes: []
        })

        const { getByText } = render(<Provider store={store}><Card joke={{ id: 4, value: 'Test' }}/></Provider>)
        getByText('Test')
    })

    it('should render joke marked as favorite', () => {
        const favoriteJoke = { id: 4, value: 'Test' }
        let store = createStore(rootReducer, {
            favorite: [favoriteJoke],
            jokes: []
        })

        const { getByText } = render(<Provider store={store}><Card joke={favoriteJoke}/></Provider>)
        
    })
})