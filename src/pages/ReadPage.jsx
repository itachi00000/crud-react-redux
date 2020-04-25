import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// action
import { fetchData } from '../redux/actions';

// redux - dispatch
const mapDispatchToProps = dispatch => {
  return {
    fetchDataRx: url => dispatch(fetchData(url))
  };
};

// redux - states
const mapStateToProps = state => {
  return {
    currentUserRx: state.userReducer.currentUser,
    isLoadingRx: state.userReducer.isLoading,
    isErrorRx: state.userReducer.isError,
    errorMsgRx: state.userReducer.msg
  };
};

// comp
function ReadPage({
  fetchDataRx,
  currentUserRx,
  isErrorRx,
  isLoadingRx,
  errorMsgRx,
  match
}) {
  const paramsId = Number(match.params.id);

  useEffect(() => {
    fetchDataRx(paramsId);
  }, [fetchDataRx, paramsId]);

  if (isErrorRx) {
    return <div className="container">{errorMsgRx}</div>;
  }

  if (isLoadingRx) {
    return <div className="container">Loading...</div>;
  }

  const { id, name, username, email } = currentUserRx;

  return (
    <div className="container text-center">
      <div className="card">
        <h1>
          Hi,
          {username || 'Default Username'} {id || 'no id'}
        </h1>
        <ul style={{ listStyle: 'none' }}>
          <li>
            Name:
            {` ${name || 'default name'}`}
          </li>
          <li>
            Email:
            {` ${email || 'default email'}`}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadPage);
