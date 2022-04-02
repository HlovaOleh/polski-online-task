import { Fragment } from 'react'
import {Grid} from '@mui/material'
import reactStringReplace from 'react-string-replace'
import {QuizSentence} from '../Quiz/types'
import {ColoredText, ItalicText} from '../Quiz/styles'
import QuizTextField from '../QuizTextField'

interface Props extends QuizSentence {}

const QuizSentenceView = (props: Props) => {
    const {text, wrongWord, answer} = props

    return (
        <Grid container>
            {reactStringReplace(text, wrongWord, (match, i) => (
                <Fragment key={i}>
                    <ColoredText component="span">
                        <ItalicText component="span">({match})</ItalicText>
                    </ColoredText>
                    <QuizTextField answer={answer}/>
                </Fragment>
            ))}
        </Grid>
    )
}

export default QuizSentenceView
