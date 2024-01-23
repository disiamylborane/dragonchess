export const isArrayNotEmpty = (arr?: unknown[]) => {
    if (!arr){
        return false
    }
    return arr?.length > 0
}

export const isArrayEmpty = (arr?: unknown[]) => {
    if (!arr){
        return true
    }
    return compare(arr?.length, 0)
}

export const arrIncludes = (value: unknown, valuesArr: unknown[]) => {
    return valuesArr?.includes(value)
}
export const arrNotIncludes = (value: unknown, valuesArr: unknown[]) => {
    return !valuesArr?.includes(value)
}

export const compare = (val1: unknown, val2: unknown) => {
    return val1 === val2
}

export const oppose = (val1: unknown, val2: unknown) => {
    return val1 !== val2
}

export const compareAsString = (val1: unknown, val2: unknown) => {
    return val1?.toString()?.toLowerCase() === val2?.toString()?.toLowerCase()
}

export const compareAsNumbers = (val1: unknown, val2: unknown) => {
    return Number(val1) === Number(val2)
}

export const isUndefined = (val: unknown) => {
    return compare(val, undefined)
}

export const isNotUndefined = (val: unknown) => {
    return oppose(val, undefined)
}

export function arrContainsObjWithVal<F extends string, V> (
    arr: {[key in F]: V}[],
    objField: F,
    value: V
    ){
    return arr?.some((item) => {
        return compare(item[objField], value)
    })
}

export const isOdd = (num: number) => {
    return num % 2 !== 0
}

export const isEven = (num: number) => {
    return num % 2 === 0
}                        

