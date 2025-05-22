import React from 'react';
import { Game } from '../../../types/game';
import { Player } from '../../../types/player';
import { CardPicker } from '../../Players/CardPicker/CardPicker';
import { Players } from '../../Players/Players';
import { GameController } from '../GameController/GameController';
import './GameArea.css';

interface GameAreaProps {
  game: Game;
  players: Player[];
  currentPlayerId: string;
}
export const GameArea: React.FC<GameAreaProps> = ({ game, players, currentPlayerId }) => {
  return (
    <>
      <div className='issueSupportNote'><b>Please create an issue on this project's <a href="https://github.com/ImBerkayKaplan/PlanningPoker/issues">GitHub Page</a> if you spot a bug and include as much information as possible, such as screenshots.</b></div>
      <div className='ContentArea'>
        <Players game={game} players={players} currentPlayerId={currentPlayerId} />
        <GameController game={game} currentPlayerId={currentPlayerId} />
      </div>
      <div className='Footer'>
        <CardPicker game={game} players={players} currentPlayerId={currentPlayerId} />
      </div>
    </>
  );
};

export default GameArea;
