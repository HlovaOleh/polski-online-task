import QuizView from './components/Quiz'
import { Quiz } from './components/Quiz/types'

const App = () => {
    const data: Quiz = {
        header: {
            plText: "Proszę napisać poprawną formę przymiotnika",
            uaText: "Напишіть правильну форму прикметника",
        },
        example: {
            text: "Książka jest lepsza niż film.",
            answer: "lepsza"
        },
        sentences: [
            {
                text: "Anka jest wysoka niż Tom.",
                wrongWord: "wysoka",
                answer: "wyższa",
            },
            {
                text: "Ten taniec jest piękny niż poprzedni.",
                wrongWord: "piękny",
                answer: "piękniejszy",
            },
            {
                text: "Mój szalik jest drogi od twojego.",
                wrongWord: "drogi",
                answer: "droższy",
            },
            {
                text: "Zielony plecak jest mały od żółtego.",
                wrongWord: "mały",
                answer: "mniejszy",
            },
            {
                text: "Dom mojej przyjaciółki jest duży od mojego.",
                wrongWord: "duży",
                answer: "większy",
            },
            {
                text: "Mój kuzyn jest niski niż moja kuzynka.",
                wrongWord: "niski",
                answer: "niższy",
            },
            {
                text: "Moja sukienka jest ładna niż twoja.",
                wrongWord: "ładna",
                answer: "ładniejsza",
            },
        ]
    }

    return (
        <div>
            <QuizView
                header={data.header}
                example={data.example}
                sentences={data.sentences}
            />
        </div>
    )
}

export default App
