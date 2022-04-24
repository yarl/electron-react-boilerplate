import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from '../Sidebar';

test('Sidebar should renders', () => {
  const { getByText, getByAltText } = render(<Sidebar files={[]} />);

  expect(getByText('Sidebar')).toBeTruthy();
  expect(getByAltText('ReactJS logo')).toBeTruthy();
});
