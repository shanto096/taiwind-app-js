import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({f}) => {
    return (
        <div className='flex items-center'>
             <CheckCircleIcon className="h-4 w-4 text-blue-500" />
            <span className='p-1'>{f}</span>
        </div>
    );
};

export default Feature;