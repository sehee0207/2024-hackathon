import React from "react";
import styled from 'styled-components';

const StyledBox = styled.div`
    border-radius: 15px;
    border: 1px solid #0057FF;
    padding: clamp(1rem, 1.2vw, 1.2rem);
    flex-direction: column; 
    align-items: flex-start;
    margin-top: 1vw;
    margin-bottom: 1rem;
    flex-grow: 1;
    max-width: clamp(70vw, 1.5vw, 60vw);
    width: 100%;
`

const StylehasmainTitle = styled.div`
    padding-left: ${({ hasMainTitle }) => (hasMainTitle ? 'clamp(1rem, 1.2vw, 1.2rem)' : '0')};
`

const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
`
const TitleContainer2 = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: 1.5rem;
`

const StyledTitle = styled.div`
    font-weight: 600;
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    margin-bottom: 0.5rem;
`

const StyledPoint = styled.div`
    font-size: clamp(0.7rem, 0.9vw, 1rem);
    margin-left: 0.3vw;
`

const List = styled.ul`
    list-style: disc; /* 기본 점 스타일 */
    font-size: clamp(0.9rem, 1vw, 1rem);
    padding-left: clamp(1.2rem, 1.5rem, 1.5rem); /* 왼쪽 여백을 추가하여 점과 텍스트 사이의 공간 확보 */
    margin: 0; /* 기본 여백 제거 */
`;

const ListItem = styled.li`
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    margin-top: 0.7vw;
`;

function Box(props){
    const { mainTitle, title, point, contents, title2, point2, contents2 } = props;

    return(
        <StyledBox>

            {mainTitle && (
                <TitleContainer>
                    <StyledTitle>{mainTitle}</StyledTitle>
                </TitleContainer>
            )}

            <StylehasmainTitle hasMainTitle={mainTitle}>
                <TitleContainer>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledPoint>{point}</StyledPoint>
                </TitleContainer>
                <List>
                    {contents && contents.map((content, index) => (
                        <ListItem key={index}>{content}</ListItem>
                    ))}
                </List>

                {title2 && point2 && (
                    <>
                        <TitleContainer2>
                            <StyledTitle>{title2}</StyledTitle>
                            <StyledPoint>{point2}</StyledPoint>
                        </TitleContainer2>
                        <List>
                            {contents2 && contents2.map((content2, index) => (
                                <ListItem key={index}>{content2}</ListItem>
                            ))}
                        </List>
                    </>
                )}
            </StylehasmainTitle>
        </StyledBox>
    );
}

export default Box;