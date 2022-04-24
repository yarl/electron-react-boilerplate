import React from 'react';
import { observer } from 'mobx-react-lite';

import useStores from './store';
import GlobalStyles from './styles/style';
import BootstrapStyles from './styles/bootstrap';

import Files from './views/Files';
import Start from './views/Start';

const App: React.FunctionComponent = () => {
  const { session } = useStores();

  const getView = () => {
    switch (session.status) {
      case 'START':
        return <Start />;
      case 'FILES':
        return <Files />;
      default:
        return <div />;
    }
  };

  return (
    <div className="d-flex flex-grow-1 h-100">
      <BootstrapStyles />
      <GlobalStyles />
      {getView()}
    </div>
  );
};

export default observer(App);
