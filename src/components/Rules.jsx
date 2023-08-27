import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>1. Select any number.</p>
        <p>2. Click on dice image.</p>
        <p>3. After clicking on dice, if selected number is equal to the dice number you
          will get the same point as dice.
        </p>
        <p>4.If you guessed the wrong number then 2 points will be dedcuted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 10px;
  }
`;
