import { Heading, Pane } from 'evergreen-ui';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent } from 'react';
import UploadElement from '../models/File.model';

type Props = {
  files: UploadElement[];
};

const Sidebar: FunctionComponent<Props> = ({ files = [] }) => {
  const selectedFiles = files.filter((file) => file.isSelected);

  return (
    <Pane borderRight="default" className="d-flex flex-column flex-shrink-0 p-3" width={250}>
      <Heading className="mb-2" size={400}>
        {`${files.length} files · ${selectedFiles.length} selected`}
      </Heading>
      <Pane>
        {selectedFiles.map((file) => (
          <div key={file.path}>{file.name}</div>
        ))}
      </Pane>
    </Pane>
  );
};

export default observer(Sidebar);
