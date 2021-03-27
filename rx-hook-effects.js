export const useStateRx = (initialState = {}) => {
    const [val, setVal] = useState(initialState)
    
    function useThing(fn = () => {}) { useEffect(fn, [val]) }
    setVal.use = useThing

    function usePipe(fn = () => {}) {
        const [bound, updateBound] = useState(fn())
        setVal.use(() => updateBound(fn))
        return bound
    }
    setVal.pipe = usePipe

    function useBool(whenTrue, whenFalse) {
        const fnA = () => val ? whenTrue : whenFalse
        const [boundA, updateBoundA] = useState(fnA())
        setVal.use(() => updateBoundA(fnA()))
        
        const fnB = () => val ? whenFalse : whenTrue 
        const [boundB, updateBoundB] = useState(fnB())
        setVal.use(() => updateBoundB(fnB()))

        return [boundA, boundB]
    }
    setVal.bool = useBool
    
    return [val, setVal]
}
