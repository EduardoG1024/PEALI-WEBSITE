const btnContactanos = document.getElementById('btnContactanos');
const btnVerMas = document.getElementById('btnVerMas');
const containerHeroBanner = document.querySelector('.containerHeroBanner');

btnContactanos.addEventListener('click', () => {
    const contactosList = document.createElement('div');
    contactosList.className = 'contactosList';
    contactosList.innerHTML = `<h2>CONTACTANOS POR WHATSAPP O CORREO</h2>
                               <ul>
                                    <a href="#"><li>(667) 146 8480</li></a>
                                    <a href="#"><li>(667) 218 0883</li></a>
                                    <a href="#"><li>(667) 218 0884</li></a>
                                    <a href="mailto:atencionalcliente@peali.com.mx"><li>atencionalcliente@peali.com.mx</li></a>
                                    <a href="mailto:calidad@peali.com.mx"><li>calidad@peali.com.mx</li></a>
                               </ul>
                               <button id="btnCerrarList">Cerrar</button>`;
    containerHeroBanner.appendChild(contactosList);
});

const btnCerrarList = document.getElementById('btnCerrarList');

btnCerrarList.addEventListener('click', () => {
    const delContactosList = document.querySelector('.contactosList');
    delContactosList.remove();
})