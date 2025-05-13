import { useEffect, useState } from 'react';
import { getDashboardStats } from '../services/dashboardAPI';

export function useDashboardData() {
  const [stats, setStats] = useState<{ label: string; value: number }[]>([]);

  useEffect(() => {
    getDashboardStats().then(setStats);
  }, []);

  return { stats };
}
