import { Button, CogIcon, Heading, Pane } from 'evergreen-ui';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent } from 'react';

import useStores from '../store';

const Toolbar: FunctionComponent = () => {
  const { session } = useStores();

  return (
    <Pane borderBottom="default" className="d-flex align-items-center px-2 py-2">
      <Heading className="mr-2" size={100}>
        Select
      </Heading>
      <Button className="mr-1" height={24}>
        All
      </Button>
      <Button height={24}>None</Button>
      <Heading className="ml-4 mr-2" size={100}>
        Sort
      </Heading>
      <Button className="mr-1" height={24} onClick={() => session.sortFiles('name')}>
        Name Asc
      </Button>
      <Button className="mr-2" height={24} onClick={() => session.sortFiles('name', false)}>
        Name Desc
      </Button>
      <Button className="mr-1" height={24} onClick={() => session.sortFiles('size')}>
        Size Asc
      </Button>
      <Button className="mr-1" height={24} onClick={() => session.sortFiles('size', false)}>
        Size Desc
      </Button>
      <Button className="ml-auto" height={24} iconBefore={CogIcon}>
        Settings
      </Button>
    </Pane>
  );
};

export default observer(Toolbar);
