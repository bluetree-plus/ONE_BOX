const ness = localStorage.getItem('__bright_ness__')
if (ness === null) {
  localStorage.setItem('__bright_ness__', '0.8')
}