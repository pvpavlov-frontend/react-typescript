import { useState, useEffect } from 'react';
import { Card, Button, Paragraph, H2, WrapperCard, Homework24Wrapper, ParagraphSpan } from './styles';
import { JokeInfo } from './types';

function Homework24() {
    const [joke, setJoke] = useState<JokeInfo>({ type: "", setup: "", punchline: "", id: "" });
    const [error, setError] = useState<string | undefined>(undefined);
    const fetchData = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error while receiving data');
                }
                return response.json();
            })
            .then(data => {
                setJoke(data);
            })
            .catch(error => {
                setError('Error while receiving data');
            });
        if (joke) {
            alert('You got a new joke');
        } else if (error) {
            alert('Error while receiving data');
        }
    };
    const handleButtonClick = () => { fetchData(); };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Homework24Wrapper>
            <WrapperCard>
                <Card>
                    {joke ? (
                        <>
                            <Paragraph>
                                <ParagraphSpan>ID:</ParagraphSpan>
                                {joke.id}
                            </Paragraph>
                            <H2>
                                <ParagraphSpan>type: </ParagraphSpan>
                                {joke.type}
                            </H2>
                            <Paragraph>
                                <ParagraphSpan>setup: </ParagraphSpan>
                                {joke.setup}</Paragraph>
                            <Paragraph>
                                <ParagraphSpan>punchline: </ParagraphSpan>
                                {joke.punchline}
                            </Paragraph>
                        </>
                    ) : (
                        <Paragraph>{error}</Paragraph>
                    )}
                </Card>
                <Button onClick={handleButtonClick}>Get a new joke</Button>
            </WrapperCard>
        </Homework24Wrapper>
    );
};

export default Homework24;


// Компонент Homework24 создает карточку с шуткой,
// которая получается по API-запросу.
// Если запрос успешен, шутка сохраняется в state и отображается на странице.
// Если запрос завершается с ошибкой, сообщение об ошибке сохраняется в state
// и отображается на странице.
// При клике на кнопку "Получить новую шутку" выполняется новый запрос и обновляется state.
// Используется useEffect для отображения алерта при обновлении шутки или возникновении
// ошибки.
// Стилизация осуществляется с помощью Styled Components.