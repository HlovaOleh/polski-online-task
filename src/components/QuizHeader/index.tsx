import {QuizHeader} from './types'
import { BoldText, ItalicText } from '../Quiz/styles'

interface Props extends QuizHeader {}

const QuizHeaderView = (props: Props) => {
    const { plText, uaText } = props

    return (
        <>
            <BoldText>
                {plText}
            </BoldText>
            <ItalicText>
                ({uaText})
            </ItalicText>
        </>
    )
}

export default QuizHeaderView
