import { promises as fsPromises } from 'fs';

export const readPackageJson = async () => {
  try {
    const packageJsonContents = await fsPromises.readFile(
      'package.json',
      'utf-8',
    );
    return JSON.parse(packageJsonContents);
  } catch (error) {
    console.error('Erro ao ler o arquivo package.json.', error);
    console.error(error);
    throw error;
  }
};
