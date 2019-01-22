import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests }) => {
  return (
        <div>
        {contests.map(contest => 
            <ContestPreview key={contest.id} {...contest} />
        )}
        </div>
    );
};

ContestList.propTypes = {
  contests: React.PropTypes.array
};

export default ContestList;