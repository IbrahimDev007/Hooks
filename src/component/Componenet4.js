import React, { useContext } from 'react';
import {UseContext} from './usecontex';
function Component4 ()  {
    const {value1,user}=useContext(UseContext)
    return (
        <div>
            hello<h1>{value1}</h1>
        </div>
    );
};
export default Component4;