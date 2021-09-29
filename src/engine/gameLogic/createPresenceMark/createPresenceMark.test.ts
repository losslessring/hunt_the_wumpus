import map  from '../../data/map/map'
import  createPresenceMark  from './createPresenceMark'
import marksTable from '../../data/marksTable/marksTable'

it('Create presence mark', () => {
    expect(
        createPresenceMark({position: 0, type: "Wumpus"})(marksTable)(map))
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
                            }
                        ])
})