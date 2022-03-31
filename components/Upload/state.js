import { atom } from 'recoil';

const TODO_LIST = 'ekyccooporate';
const ekyc = 'ekyc';
const ekyccooporate = atom({
    key: ekyc,
    default: []
});

export default ekyccooporate;
