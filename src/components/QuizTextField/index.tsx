import {KeyboardEvent, useEffect, useRef, useState} from 'react'
import {Input} from './styles'
import ThreeDotsIndicator from '../ThreeDotsIndicator'
import {Box} from '@mui/material'

interface Props {
    answer: string
}

const QuizTextFieldView = (props: Props) => {
    const { answer } = props
    const [value, setValue] = useState<string>('')
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [mistakeCount, setMistakeCount] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setValue(e.currentTarget.value)
        }
    }

    const checkMistake = () => {
        if (value !== answer) {
            setMistakeCount(prevState => prevState + 1)
        } else if (value === answer) {
            setIsSuccess(true)
        }
    }

    useEffect(() => {
        if (value !== '') {
            checkMistake()
        }
    }, [value])

    useEffect(() => {
        if (mistakeCount === 3) {
            setValue(answer)
            inputRef!.current!.value = answer
        }
    }, [mistakeCount])

    return (
        <Box sx={{ display: 'flex', mr: '8px', ml: '8px', columnGap: '5px' }}>
            <Input
                type="text"
                ref={inputRef}
                onKeyPress={handleOnEnter}
                disabled={isSuccess}
                borderColor={isSuccess ? 'green' : 'grey'}
            />
            <ThreeDotsIndicator isSuccess={isSuccess} mistakeCount={mistakeCount} />
        </Box>
    )
}

export default QuizTextFieldView
