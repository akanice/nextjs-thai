import React, { useEffect, useState } from 'react';
import CreateAccountInfo from './CreateAccountInfo';
import CreateAccountUserPC from './CreateAccountUserPC';

const CreateAccount = () => {
    
    return (
        <>
            <div className={`flex justify-between mx-1`}>
                <div className={`w-3/4 mr-6`}>
                    <CreateAccountInfo />
                </div>
                <div className={`w-1/4`}>
                    <CreateAccountUserPC />
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
