import React, { useState } from 'react';

import NotebookSelect from './screens/NotebookSelect';
import Notebook from './entities/Notebook';

const App: React.FC = () => {
    const [openNotebooks, setOpenNotebooks] = useState<Notebook[]>([]);
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-sans">
        {
            openNotebooks.length > 0 ? <div></div> : <NotebookSelect />
        }
      </div>
    );
  };

  export default App;