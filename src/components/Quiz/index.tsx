import {Quiz} from './types'
import QuizHeader from '../QuizHeader'
import QuizSentenceView from '../QuizSentence'
import {Box, Grid} from '@mui/material'
import reactStringReplace from 'react-string-replace'
import {ColoredText, BoldText} from './styles'

interface Props extends Quiz {}

const QuizView = (props: Props) => {
    const {header, example, sentences} = props

    return (
        <>
            <Box sx={{mb: '30px'}}>
                <QuizHeader
                    plText={header.plText}
                    uaText={header.uaText}
                />
            </Box>
            <Grid container alignItems="center">
                <ColoredText component="span">Przykład:</ColoredText>
                <BoldText>{reactStringReplace(example.text, example.answer, (match, i) => (
                    <ColoredText key={i} component="span">{match}</ColoredText>
                ))}</BoldText>
            </Grid>
            <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '10px'}}>
                {sentences.map((s, i) => (
                    <div key={i}>
                        <QuizSentenceView
                            text={s.text}
                            wrongWord={s.wrongWord}
                            answer={s.answer}
                        />
                    </div>
                ))}
            </Box>
        </>
    )
}

export default QuizView
