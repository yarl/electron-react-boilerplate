import { Pane } from 'evergreen-ui';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent } from 'react';

type Props = {
  variable: string;
};

const Template: FunctionComponent<Props> = () => {
  return <Pane>content</Pane>;
};

export default observer(Template);
