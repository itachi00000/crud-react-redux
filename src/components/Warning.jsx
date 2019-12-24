import React from 'react';

export default function Warning({ alerts }) {
  return (
    <h4 className="alert alert-danger text-center mb-0">
      {alerts.isLoading && alerts.alertMsg}
      {alerts.isError && alerts.alertMsg}
      {alerts.isEmpty && alerts.alertMsg}
    </h4>
  );
}
