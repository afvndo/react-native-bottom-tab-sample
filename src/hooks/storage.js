import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

const AuthContext = createContext({});

const StorageProvider: React.FC = ({children}) => {
  return (
    <AuthContext.Provider
      value={{
        logEvent,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useStorage() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useStorage shoud be used with an StorageProvider');
  }

  return context;
}

export {useStorage, StorageProvider};
