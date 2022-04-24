import { Button, Heading, Pane, Text } from 'evergreen-ui';
import { observer } from 'mobx-react-lite';
import prettyBytes from 'pretty-bytes';
import React, { FunctionComponent } from 'react';
import { TSelectableItemProps, createSelectable } from 'react-selectable-fast';
import styled from 'styled-components';

import UploadElement from '../models/File.model';

const StyledFilePanel = styled(Pane)`
  &:hover {
    background-color: #f9f9fb;
  }
`;

const StyledThumbnail = styled(Pane)`
  border: ${({ $isSelected }) => ($isSelected ? `4px solid #1070CA` : 'none')};
`;

type Props = {
  file: UploadElement;
};

const FilePanel: FunctionComponent<Props & TSelectableItemProps> = (props) => {
  const { file, selectableRef } = props;
  const width = 220;

  return (
    <StyledFilePanel
      className="d-flex flex-column p-2"
      ref={selectableRef}
      key={file.path}
      width={width}
    >
      <Pane className="d-none mb-2">
        <Button className="mr-2" height={24} onClick={() => file.toggleSelect()}>
          Toggle Select
        </Button>
        <Button height={24}>Delete</Button>
      </Pane>
      <StyledThumbnail
        $isSelected={file.isSelected}
        background="#7B8B9A"
        width={width - 16}
        height={width * 0.75}
      >
        {file.thumbnail && (
          <img
            alt="img"
            className="w-100 h-100"
            src={file.thumbnail}
            style={{ objectFit: 'contain' }}
          />
        )}
      </StyledThumbnail>
      <Heading size={300} className="mt-2 text-truncate">
        {file.name}
      </Heading>
      <Text size={300} className="mt-1 mb-1 text-truncate">
        {`Size: ${prettyBytes(file.size)}`}
      </Text>
    </StyledFilePanel>
  );
};

export default createSelectable(observer(FilePanel));
