import React, { useRef, useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';
import ReactLoading from 'react-loading';
import Tab1 from './BriefStep5Element/Tab1';
import Tab2 from './BriefStep5Element/Tab2';
import Tab3 from './BriefStep5Element/Tab3';
import Tab4 from './BriefStep5Element/Tab4';
import Tab5 from './BriefStep5Element/Tab5';

const BriefStep5new = ({ setTab }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '1px solid #ccc',
        boxShadow: 24
    };
    const classInput = `form-check-input appearance-none h-4 w-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`;
    const classTab = `flex justify-between mb-3 border-b border-dashed border-gray-200 pb-3 mb-3`;
    const nextStep = () => {
        setTab('step6');
    };

    return (
        <>
            <Tab1 classInput={classInput} classTab={classTab} />
            <Tab2 classInput={classInput} classTab={classTab} />
            <Tab3 classInput={classInput} classTab={classTab} />
            <Tab4 classInput={classInput} classTab={classTab} />
            <Tab5 classInput={classInput} classTab={`flex justify-between mb-3 pb-3 mb-3`} />
            
            <button onClick={nextStep} className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-9 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                Tiếp tục
            </button>
        </>
    );
};

export default BriefStep5new;
