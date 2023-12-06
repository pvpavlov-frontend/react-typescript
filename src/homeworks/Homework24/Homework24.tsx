import React, { useState, useEffect } from 'react';
import { Card, Button, Paragraph, H2, WrapperCard, Homework24Wrapper } from './styles';
import { JokeInfo } from './types';



const Homework24 = () => {
    const [joke, setJoke] = useState<JokeInfo>({
        type: "",
        setup: "",
        punchline: "",
        id: "",
    });
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        fetchData();
    }, []);

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
    };

    const handleButtonClick = () => {
        fetchData();
    };

    useEffect(() => {
        if (joke) {
            console.log('You got a new joke');
        } else if (error) {
            alert('Error while receiving data');
        }
    }, [joke, error]);

    return (
        <Homework24Wrapper>
            <WrapperCard>
                <Card>
                    {joke ? (
                        <div>
                            <Paragraph>
                                <span style={{ color: 'red', fontSize: "18px" }}>ID:</span>
                                {joke.id}
                            </Paragraph>
                            <H2 style={{ color: 'blue', lineHeight: "1em", marginBottom: "20px" }}>
                                <span style={{ color: 'red', fontSize: "18px" }}>type: </span>
                                {joke.type}
                            </H2>
                            <Paragraph>
                                <span style={{ color: 'red', fontSize: "18px" }}>setup: </span>
                                {joke.setup}</Paragraph>
                            <Paragraph>
                                <span style={{ color: 'red', fontSize: "18px" }}>punchline: </span>
                                {joke.punchline}
                            </Paragraph>
                        </div>
                    ) : (
                        <p>{error}</p>
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