import {create} from 'zustand';
import { persist } from 'zustand/middleware';


const useCardStore = create(persist(
    (set) => ({
        cards: [],
        addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
        deleteCard: (cardId) => set((state) => ({
            cards: state.cards.filter(card => card.cardId != cardId)
        }))


    }),
    {
        name: 'excalidraw-storage-pro',
        getStorage: () => localStorage
    }
))


export default useCardStore;