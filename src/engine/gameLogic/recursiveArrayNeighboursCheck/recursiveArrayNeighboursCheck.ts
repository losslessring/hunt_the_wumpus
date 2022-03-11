type PredicateFunction = (a:any, b: any) => boolean

type ArrayNeighboursCheck = (p: PredicateFunction) => (acc: boolean[]) => (arr: any[]) => boolean[]

const recursiveArrayNeighboursCheck: ArrayNeighboursCheck = (checkFunc: PredicateFunction) => (acc: boolean[]) => (arr: any[]): boolean[] => {
    if (arr.length === 2) {
      return [...acc, checkFunc(arr[0], arr[1])]
    } else {
      return recursiveArrayNeighboursCheck(checkFunc)([...acc, checkFunc(arr[0], arr[1])])(
        arr.slice(1)
      )
    }
  }
export default recursiveArrayNeighboursCheck