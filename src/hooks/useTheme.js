import { useEffect } from "react";

const useTheme = () => {
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.theme = 'light'; // Memastikan tema diset ke light mode
      document.documentElement.classList.remove('dark'); // Menghapus kelas 'dark'
    }
  }, []);
};

export default useTheme;
