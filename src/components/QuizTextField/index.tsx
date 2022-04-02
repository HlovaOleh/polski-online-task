import {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from 'react'
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
    const [width, setWidth] = useState<number>(5)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newLength = e.target.value.length
        if (newLength > width) {
            setWidth(newLength)
        }
    }

    const handleOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setValue(e.currentTarget.value)
        }
    }

    const handleOnDelete = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            const newLength = e.currentTarget.value.length
            if (newLength === 0) {
                setWidth(5)
            } else if (newLength > 5) {
                setWidth(newLength)
            }
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
                onChange={handleOnChange}
                onKeyPress={handleOnEnter}
                onKeyUp={handleOnDelete}
                disabled={isSuccess}
                borderColor={isSuccess ? 'green' : 'grey'}
                width={`${width}ch`}
            />
            <ThreeDotsIndicator isSuccess={isSuccess} mistakeCount={mistakeCount} />
        </Box>
    )
}

export default QuizTextFieldView
