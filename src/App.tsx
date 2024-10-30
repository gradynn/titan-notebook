import React, { useState } from 'react';

import NotebookSelect from './screens/NotebookSelect';
import Notebook from './entities/Notebook';
import NotebookDisplay from './screens/NotebookDisplay';

const App: React.FC = () => {
  const notebooks: Notebook[] = [{
      filepath: null,
      name: "Notebook 1",
      cells: [],
  }, {
    filepath: null,
    name: "Notebook 2",
    cells: [],
  }, {
    filepath: null,
    name: "Notebook 3", 
    cells: [],
  }];

  const [openNotebooks, setOpenNotebooks] = useState<Notebook[]>(notebooks);
  const [activeNotebook, setActiveNotebook] = useState<number>(0);

  const openNotebook = (nb: Notebook) => {
    setOpenNotebooks([...openNotebooks, nb]);
    setActiveNotebook(openNotebooks.length);
  }

  const closeNotebook = (index: number) => {
    setOpenNotebooks([
      ...openNotebooks.slice(0, index),
      ...openNotebooks.slice(index + 1)
    ]);
  }
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center font-sans">
      {
          openNotebooks.length > 0 ? 
          <NotebookDisplay 
            openNotebooks={openNotebooks} 
            closeNotebook={closeNotebook} 
            openNotebook={openNotebook} 
            activeNotebook={activeNotebook}
            setActiveNotebook={setActiveNotebook} 
          /> 
          : 
          <NotebookSelect openNotebook={openNotebook} />
      }
    </div>
  );
};

export default App;