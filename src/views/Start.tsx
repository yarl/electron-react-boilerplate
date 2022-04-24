import { ipcRenderer } from 'electron';
import {
  Button,
  DocumentOpenIcon,
  FolderOpenIcon,
  Heading,
  ImportIcon,
  majorScale,
  Pane,
} from 'evergreen-ui';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent } from 'react';

import getFilesList from '../helpers/getFilesList';
import useStores from '../store';

const Start: FunctionComponent = () => {
  const { session } = useStores();

  const onLoadButtonClick = async () => {
    const { filePaths = [] } = await ipcRenderer.invoke('show-open-dialog');
    if (filePaths.length) {
      const files = getFilesList(filePaths);
      session.addFiles(files);
      session.setStatus('FILES');
      console.log(session.files, session.status);
    }
  };

  return (
    <Pane
      className="d-flex flex-grow-1 flex-column align-items-center justify-content-center"
      data-testid="start-view-container"
      background="tint1"
    >
      <Heading className="mb-1" size={700}>
        Hey!
      </Heading>
      <Heading className="mb-4" size={400}>
        It&apos;s Kajmak in the early stage. Things should break.
      </Heading>
      <Pane className="d-flex flex-column" width={300}>
        <Button
          className="mb-2"
          height={majorScale(5)}
          iconBefore={FolderOpenIcon}
          onClick={onLoadButtonClick}
        >
          Load Files or Directory
        </Button>
        <Button className="mb-4" disabled height={majorScale(5)} iconBefore={DocumentOpenIcon}>
          Open Session
        </Button>
        <Button disabled height={majorScale(5)} iconBefore={ImportIcon}>
          Import Pattypan Session
        </Button>
      </Pane>
    </Pane>
  );
};

export default observer(Start);
