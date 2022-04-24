import { Pane } from 'evergreen-ui';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent, useRef } from 'react';
import { SelectableGroup } from 'react-selectable-fast';

import useStores from '../store';
import Toolbar from '../components/Toolbar';
import Sidebar from '../components/Sidebar';
import FilePanel from '../components/FilePanel';

const Files: FunctionComponent = () => {
  const { session } = useStores();

  const selectableGroupRef = useRef(null);
  const onSelectionFinish = (selectedList = [], clickedItem = {}) => {
    console.log(selectableGroupRef.current);
    const selectedFiles = selectedList.map(({ props }) => props.file);

    for (const item of selectableGroupRef.current.registry.values()) {
      item.setState({ isSelected: false });
    }
    selectableGroupRef.current.selectedItems = [];
    session.files.forEach((file) => file.setSelect(false));

    if (clickedItem.props) {
      clickedItem.props.file.setSelect(true);
    } else {
      selectedFiles.forEach((selectedFile) => selectedFile.setSelect(true));
    }
  };

  return (
    <Pane className="d-flex flex-grow-1 flex-column" data-testid="files-view-container">
      <Toolbar />
      <Pane className="d-flex">
        <Sidebar files={session.files} />
        <SelectableGroup
          allowCtrlClick
          allowShiftClick
          className="d-flex align-content-start flex-wrap p-3"
          mixedDeselect
          ref={selectableGroupRef}
          // resetOnStart
          onSelectionFinish={onSelectionFinish}
        >
          {session.files.map((file) => (
            <FilePanel key={file.path} file={file} />
          ))}
        </SelectableGroup>
      </Pane>
    </Pane>
  );
};

export default observer(Files);
