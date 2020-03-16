import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Shoul setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({      // toEqual comes from jest to compare two objects
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('543hztb', { note: 'new note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '543hztb',
        updates: { note: 'new note value' }
    })
}) 

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent', 
        note: 'This was last months rent', 
        amount: 109500, 
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})