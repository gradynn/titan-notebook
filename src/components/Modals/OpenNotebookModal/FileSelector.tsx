import React from 'react';
import SecondaryButton from '../../buttons/SecondaryButton';

interface FileSelectorProps {
  setFilePath: (filePath: string) => void;
}

const FileSelector: React.FC<FileSelectorProps> = ({ setFilePath }) => {
  const handleSelectFile = async () => {
    const path = await window.electron.selectFile();
    if (path) {
      setFilePath(path);
    }
  };

  return (
    <SecondaryButton label="Choose File" onClick={handleSelectFile} />
  );
};

export default FileSelector;