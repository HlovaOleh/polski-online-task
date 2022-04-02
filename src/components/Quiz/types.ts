import {QuizHeader} from '../QuizHeader/types'

export type Quiz = {
    header: QuizHeader
    example: QuizSentence
    sentences: QuizSentence[]
}

export type QuizSentence = {
    text: string
    wrongWord?: string
    answer: string
}
