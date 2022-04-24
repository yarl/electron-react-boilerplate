import React from 'react';

import SessionStore from './models/Session.model';

const session = new SessionStore();
const storesContext = React.createContext({ session });
const useStores = () => React.useContext(storesContext);

export default useStores;
