import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

export function TasksInLogoutPage() {
  useEffect(() => {

      navigate('/session-timed-out');

  });

  return <div>выход</div>;
}