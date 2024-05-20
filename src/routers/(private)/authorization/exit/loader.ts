export const loader = () => {
  return async () => {
    try {
      await fetch('http://127.0.0.1:8000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Connection: ' keep-alive',
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return localStorage.clear();
        }
      });
    } catch (error) {
      throw error;
    }
    return null;
  };
};