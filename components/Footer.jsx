function Footer() { 
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert('we are currently open'); else alert('sorry we are closed');
  return <footer className="footer">
    { new Date().toLocaleTimeString()} We are currently open.
  </footer>
}

export default Footer;