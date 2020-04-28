import React from 'react';

import { ItemDisplayer } from './ItemDisplayer';

export const ListDisplayer = (props) =>{
    
    return(
        props.languagePortfolio.map((element , index) =>{
            return(
                <ItemDisplayer
                    language={element.language}
                    numberOfProject={element.numberOfProject}
                    from={element.duration.from}
                    to={element.duration.to}
                    key={index}
                />
            );
        })
    );
}