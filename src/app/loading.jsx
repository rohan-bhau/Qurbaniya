import { Spinner } from '@heroui/react';
import React from 'react'
import { BarLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className="flex flex-col mx-auto justify-center items-center h-screen gap-2">
      <Spinner color="success" />
      <span className="text-xs text-muted"></span>
    </div>
  );
}

export default loading
