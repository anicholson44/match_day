import React from 'react';
import ChangeShowScore from '../containers/ChangeShowScore';

const ViewableScore = (score) =>
  <>
    <ChangeShowScore scoreShown />
  </>;

const HiddenScore = () =>
  <ChangeShowScore />;

const ScoreComponent = (showScore) => showScore ? ViewableScore : HiddenScore;

const Score = ({ showScore, ...other }) =>
  React.createElement(ScoreComponent(showScore), other);

export default Score;
