import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomModal from '../shared/Modal';
import { hideModal } from './actions';

const ErrorModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(hideModal());
  const {isModalVisible} = useSelector(state => state.error)

  return (
    <CustomModal
      isModalOpen={isModalVisible}
      closeModal={closeModal}
      message="Something went wrong :("
      extraInfo="Unknown error has occurred while fetching results from server."
    />
  );
}

export default ErrorModal;
