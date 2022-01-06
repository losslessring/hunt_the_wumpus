import map  from '../../data/map/map'
import  createPresenceMark  from './createPresenceMark'
import marksTable from '../../data/marksTable/marksTable'

it('Create Wumpus presence mark', () => {
    expect(
        createPresenceMark([{position: 0, type: "Wumpus"}])(marksTable)(map))
        .toStrictEqual([
                            {
                                roomNumber:     17,
                                mark:          "Disgusting smell"
                            },
                            {
                                roomNumber:     12,
                                mark:          "Disgusting smell"
                            },
                            {
                                roomNumber:     15,
                                mark:          "Disgusting smell"
                            },
                            {
                                roomNumber:     0,
                                mark:          "Disgusting smell"
                            }
                        ])
})


it('Create pit presence mark', () => {
    expect(
        createPresenceMark([{position: 0, type: "Pit"}])(marksTable)(map))
        .toStrictEqual([
                            {
                                roomNumber:     17,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     12,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     15,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     0,
                                mark:          "Draft"
                            }
                        ])
})

it('Create pit at the same spot presence mark', () => {
    expect(
        createPresenceMark([{position: 0, type: "Pit"}, {position: 0, type: "Pit"}])(marksTable)(map))
        .toStrictEqual([
                            {
                                roomNumber:     17,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     12,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     15,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     0,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     17,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     12,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     15,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     0,
                                mark:          "Draft"
                            }
                        ])
})

it('Create pit presence mark', () => {
    expect(
        createPresenceMark([{position: 0, type: "Pit"}, {position: 6, type: "Pit"}])(marksTable)(map))
        .toStrictEqual([
                            {
                                roomNumber:     17,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     12,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     15,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     0,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     16,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     3,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     4,
                                mark:          "Draft"
                            },
                            {
                                roomNumber:     6,
                                mark:          "Draft"
                            }
                        ])
})
