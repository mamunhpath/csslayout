import React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div className="h-100 flex flex-column items-center justify-center pa2">
                <div className="h1 w-100 br-pill bg-black-10 pa1">
                    <div className="w-40 br-pill h-100 bg-black-30" />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;