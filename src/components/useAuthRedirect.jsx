import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');

    if (!(token && id)) {
      // Si no hay token o id, redirige al usuario a la pantalla de inicio
      navigate('/');
    }
  }, [navigate]);

  return navigate; // Puedes devolver navigate si necesitas usarlo en el componente que usa este gancho
};

export default useAuthRedirect;