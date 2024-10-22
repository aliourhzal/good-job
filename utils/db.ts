// utils/db.ts
import { AppDataSource } from '../ormconfig';

export const initializeDatabase = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
};