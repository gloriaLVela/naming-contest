import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => {
  return (
        <div>
        {contests.map(contest => 
            <ContestPreview 
            key={contest.id} 
            onClick={onContestClick}
            {...contest} />
        )}
        </div>
    );
};

ContestList.propTypes = {
  contests: React.PropTypes.array,
  onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;