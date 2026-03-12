document.addEventListener("DOMContentLoaded", function(){

  const offcanvas = document.getElementById('menumobile')
  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas)

  document.querySelectorAll('.offcanvas-link').forEach(link => {
    link.addEventListener('click', () => {
      bsOffcanvas.hide()
    })
  })

})