import fs from 'fs/promises';
import path from 'path';

export async function getServerData() {
  const filePath = path.join(process.cwd(), 'public', 'iuml-data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}