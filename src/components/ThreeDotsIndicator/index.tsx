import {Box} from '@mui/material'
import {Dot} from './styles'
import {useEffect, useState} from "react";

interface Props {
    isSuccess: boolean
    mistakeCount: number
}

type DotState = {
    id: number
    isSuccess: boolean
    isError: boolean
    maxMistakeCount: number
}

const ThreeDotsIndicator = (props: Props) => {
    const {isSuccess, mistakeCount} = props
    const [currentId, setCurrentId] = useState<number>(0)
    const [dotsState, setDotsState] = useState<DotState[]>([{
        id: 1,
        isSuccess: false,
        isError: false,
        maxMistakeCount: 1,
    }, {
        id: 2,
        isSuccess: false,
        isError: false,
        maxMistakeCount: 2,
    }, {
        id: 3,
        isSuccess: false,
        isError: false,
        maxMistakeCount: 3,
    }])

    const getBackgroundColor = (dot: DotState): string => {
        let color = 'grey'

        if (dot.isSuccess) {
            color = 'green'
        } else if (dot.isError) {
            color = 'red'
        }

        return color
    }

    useEffect(() => {
        setCurrentId(prevState => prevState + 1)
        const dot = dotsState.find(d => d.id === currentId)
        const index = dotsState.findIndex(d => d.id === currentId)
        if (dot) {
            if (isSuccess) {
                dot.isSuccess = isSuccess
            } else if (dot.maxMistakeCount === mistakeCount) {
                dot.isError = true
            }

            let tempArr = [...dotsState]
            tempArr[index] = dot
            setDotsState(tempArr)
        }
    }, [isSuccess, mistakeCount])

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '3px'}}>
            {dotsState.reverse().map(dot => <Dot key={dot.id} backgroundColor={getBackgroundColor(dot)}/>)}
        </Box>
    )
}

export default ThreeDotsIndicator
