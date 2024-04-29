let userData = null;

// Check if window is defined (running in the browser)
if (typeof window !== 'undefined') {
  let user = sessionStorage.getItem('userData');
  userData = JSON.parse(user);
}

export { userData };
