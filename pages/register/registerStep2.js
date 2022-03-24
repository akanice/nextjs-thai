import React, { useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {MdCheckCircleOutline} from "react-icons/md";
import {FaExclamationCircle} from 'react-icons/fa';
import ProgressStepper from '@components/Elements/ProgressStepper';
import { Router } from '@mui/icons-material';
import { useRouter } from 'next/router';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
};

const RegisterStep2 = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModal, setOpenModal] = useState(false);
  const openModalGuide = () => setOpenModal(true);
  const closeModalGuide = () => setOpenModal(false);
  const nextPage = (e) => {
    router.push('/register')
  } 
  return (
    <div className={`p-6`}>
      <div className={``}>
        <div className="container mx-auto py-6">
          <ProgressStepper page={2} />

        </div>
      </div>
    </div>
  );
};

export default RegisterStep2;
