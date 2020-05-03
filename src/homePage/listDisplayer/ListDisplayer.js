import React from 'react';

import { ItemDisplayer } from './ItemDisplayer';

export const ListDisplayer = (props) => {

    return(
        props.path.map((element , index) =>{
            return(
                <ItemDisplayer
                    school={element.school}
                    major={element.major}
                    diploma={element.diploma}
                    from={element.duration.from}
                    to={element.duration.to}
                    key={index}
                />
            );
        })
    )
}