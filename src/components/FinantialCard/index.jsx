import styled, { css } from 'styled-components';
import P from 'prop-types';

export const Article = styled.article`
  ${({ theme }) => css`
    text-align: center;
    padding: 0.5rem;
    background-color: white;
    box-shadow: 0px 2px 9px 2px rgba(89, 89, 89, 0.1);

    #article-text {
      font-weight: bold;
      margin-top: 2rem;
    }

    .greenValue {
      color: green;
    }

    @media ${theme.media.default} {
      margin: 1.5rem 1rem;
    }
  `}
`;

export const FinantialCard = ({ name, value, greenValue = false }) => {
  return (
    <Article>
      <h5>{name}</h5>
      <p className={greenValue ? 'greenValue' : ''} id="article-text">
        {value}
      </p>
    </Article>
  );
};

FinantialCard.propTypes = {
  name: P.string,
  value: P.number,
  greenValue: P.bool,
};
