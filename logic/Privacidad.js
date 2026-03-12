const btnSwitch = document.querySelectorAll('#btnSwitch');
const ParrafoPrivacidadSwitch = document.querySelector('#ParrafoPrivacidadSwitch');

btnSwitch.forEach(btn => {
    btn.addEventListener('click', () => {
        let number = btn.dataset.btn;
        if (number == 1) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>IDENTIDAD DEL RESPONSABLE: </strong> <br> 
                    De acuerdo con lo previsto en la “LEY FEDERAL DE PROTECCION DE DATOS 
                    PERSONALES” Proyectos y Evaluaciones en Ambiente Laboral e Industrial, S. de R.L. de C.V., 
                    declara ser una empresa legalmente constituida con las leyes mexicanas, con domicilio ubicado 
                    en Costa Rica 2918-A, Humaya, Culiacan, Sinaloa, C.P. 80020. Así como manifestar ser el 
                    responsable del tratamiento de sus datos personales.`
        } else if (number == 2) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>FINALIDADES DEL TRATAMIENTO DE DATOS: </strong> <br>
                    Con la finalidad de brindarle la adecuada atención; prestarle los servicios que requiere en 
                    tiempo y forma, apegados a las normatividades mexicanas referentes a contaminación ambiental, 
                    seguridad e higiene industrial; le solicitamos la información para conocer su problemática, 
                    elaborarle una propuesta comercial una vez aprobada, otorgarle los servicios que nos solicitó 
                    respaldados por diversos documentos como estudios digitales o impresos, comprobantes fiscales, 
                    entre otros: 1. Atender la solicitud de información, servicios, preguntas o comentarios. 2. 
                    Realizar y enviar cotizaciones. 3. Cumplir con los procedimientos señalados por la Ley para el 
                    monitoreo y evaluación. 4. Elaborar comprobantes fiscales como facturas; realizar depósitos 
                    o transferencias. 5. Entregar informes de resultados de ensayo. 6. Mantener una relación con 
                    los usuarios y clientes, 7. Desarrollar un adecuado control de calidad. 8. Enviar información, 
                    noticias, comunicados y publicidad. 9. Crear base de datos para fines de investigación y 
                    desarrollo de servicios.`
        } else if (number == 3) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>DATOS PERSONALES A RECABAR: </strong> <br>
                    Para las finalidades antes mencionadas, podemos recabar sus datos personales de distintas formas: 
                    cuando usted nos lo proporciona directamente; cuando visita nuestro sitio de internet y cuando 
                    obtenemos información a través de otras fuentes que están permitidas por la ley. Los datos que 
                    le solicitemos varían de acuerdo con el servicio que contrate a través de nosotros y la relación 
                    comercial existente, si es cliente, proveedor, a continuación, le presentamos un listado con la 
                    información solicitada regularmente: a) Nombre completo, teléfono de oficina, celular, correo 
                    electrónico, tratándose de una persona física. b) Domicilio (calle, numero interior, numero 
                    exterior, colonia, ciudad, municipio, estado, código postal) c) Razón social tratándose se 
                    ser personal moral. d) Nombre del representante legal/ director general. e) Contactos de la 
                    empresa, para envío de factura: nombre, puesto, teléfono y correo electrónico. f) Condiciones 
                    técnicas específicas de sus instalaciones, maquinaria, equipo, mapas o croquis. g) Datos de los 
                    puestos de trabajo existentes en su empresa. h) Hojas de seguridad. i) Títulos de descarga, 
                    requerimientos gubernamentales o similares. j) Nivel de satisfacción u opinión sobre nuestros 
                    productos y servicios.`
        } else if (number == 4) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>DATOS PERSONALES SENSIBLES:</strong> <br>
                    Con base en la ley en materia de protección de datos personales en posesión de particulares, 
                    le informamos que solo se recabaran los siguientes datos: a) RFC b) Régimen fiscal en el que 
                    se encuentra. c) Número y datos de cuenta bancaria (banco, número de cuenta, sucursal, clave 
                    interbancaria, moneda de la cuenta) En cuestión de proveedores, es indispensable los datos de 
                    cuenta bancaria, de lo contrario no se podrá realizar el pago, mismos que solo se usaran con 
                    fines de facturación o pagos. En relación con lo anterior, le hacemos de su concomimiento, que 
                    lo recabado será para uso exclusivo de Proyectos y Evaluaciones en Ambiente Laboral e Industrial, 
                    S. de R.L. de C.V., y será tratado con los principios señalados posteriormente.`
        } else if (number == 5) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>TRATAMIENTO Y USO DE DATOS:</strong> <br>
                    Nos comprometemos a que los mismos serán tratados bajo las más estrictas medidas de seguridad que 
                    garanticen su confidencialidad; observando los principios de licitud, consentimiento, información, 
                    calidad, finalidad, lealtad, proporcionalidad y responsabilidad. Mismas que exigimos sean cumplidas 
                    por los proveedores de servicios que contratamos, para evitar la pérdida, mal uso, alteración, 
                    acceso no autorizado o robo de Datos Personales del Usuario que le sean facilitados. No obstante, 
                    lo anterior, y debido a que las medidas de seguridad pueden ser susceptibles de violaciones por 
                    actos fuera del control Proyectos y Evaluaciones en Ambiente Laboral e Industrial, S. de R.L. de C.V., 
                    éste, sin responsabilidad alguna, se compromete a informar al titular en caso de que existan 
                    vulneraciones a sus medidas de seguridad para que éste a su vez, pueda tomar las medidas correspondientes 
                    en defensa de sus derechos. Cabe señalar que el tratamiento será únicamente limitado de acuerdo con 
                    las finalidades previstas y en razón del tiempo que dure las relaciones contraídas, una vez terminadas 
                    o dejados se ser necesarios para el cumplimiento de las finalidades se procederá a la cancelación de 
                    los mismos, a fin de salvaguardar su información. Así mismo y de llevarse a cabo un incumplimiento 
                    contractual, se procederá a conservar la información relativa al incumplimiento hasta por un plazo de 
                    sesenta meses, contado a partir de la fecha calendario en que se presente el mencionado incumplimiento; 
                    una vez concluido dicho plazo se procederá a eliminarse toda la información relacionada. Si usted no 
                    manifiesta su oposición al tratamiento de datos señalados en el presente Aviso de Privacidad, se 
                    entenderá que ha otorgado su consentimiento para ello.`
        } else if (number == 6) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN U OPOSICIÓN (DERECHO ARCO):</strong> <br>
                    Es importante informarle que usted tiene derecho de acceder a sus datos personales que poseemos y 
                    a los detalles del tratamiento de los mismos, así como rectificarlos en caso de ser inexactos o 
                    incompletos; cancelarlos cuando considere que no se requieren para alguna de las finalidades señalados 
                    en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o haya 
                    finalizado la relación contractual o de servicio, o bien, oponerse al tratamiento de los mismos para 
                    fines específicos. Asimismo, usted podrá revocar el consentimiento que nos ha otorgado para el tratamiento 
                    de sus datos personales, a fin de que dejemos de hacer uso de estos. Los mecanismos que se han implementado 
                    para el ejercicio de dichos derechos, así como de la revocación de consentimiento serán de forma gratuita; 
                    y para ello, es necesario que envíe la solicitud en los términos que marca la Ley en su Artículo 29 a 
                    Pablo Iniestra Coria, responsable de Protección de Datos Personales, ubicado en Costa Rica 2918-A, 
                    Humaya, Culiacan, Sinaloa, C.P. 80020; o bien, se comunique al teléfono (667) 146 8480; (667) 245 1910 
                    o vía correo electrónico a pabloiniestra@gmail.com, respectivamente; el cual solicitamos confirme vía 
                    electrónica para garantizar su correcta recepción. Dicha solicitud deberá contener: 1) nombre y apellido 
                    del titular de los derechos, domicilio para escuchar y recibir notificaciones, correo electrónico; 2) 
                    documento que acredite su personalidad (IFE en caso de persona física o Acta Notarial e IFE del representante 
                    legal en caso de persona moral); 3) descripción clara y precisa del ejercicio del derecho; 4) elementos que 
                    permitan la localización de los datos. Una vez presentada la solicitud, tendremos un plazo máximo de 20 día 
                    hábiles contados a partir del día siguiente de la fecha contenida en el acuse, para atender su petición y 
                    le informaremos sobre la procedencia de la misma a través de correo electrónico o en el domicilio señalado.`
        } else if (number == 7) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>TRANSFERENCIA DE DATOS:</strong> <br>
                    Le informamos que se realiza solamente la transferencia de su información al SAT y a nuestra base de datos 
                    de facturación electrónica, con el único fin de emitir la factura correspondiente a su favor.`
        } else if (number == 8) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>USO DE MECANISMOS REMOTOS O LOCALES DE COMUNICACIÓN:</strong> <br>
                    Le informamos, que nosotros no utilizamos ningún mecanismo remoto o local de comunicación, y que en nuestra 
                    página web no se utilizan cookies, ni web beacons, por lo que la información que obtengamos de usted será 
                    únicamente la obtenida cuando nos proporciona directamente.`
        } else if (number == 9) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>MODIFICACIONES AL AVISO DE PRIVACIDAD:</strong> <br>
                    Importante: nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al 
                    presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos 
                    requerimientos para la prestación u ofrecimiento de nuestros servicios. Por lo que se obliga a mantener 
                    actualizado el presente aviso, para su consulta. Esto con el fin de que “EL TITULAR” se encuentre en posibilidad 
                    de ejercer sus derechos ARCO y de esta forma mantenerlo al tanto de cualquier modificación a través de los 
                    siguientes medios: a) anuncio visible en nuestras instalaciones; b) se les hará llegar en el último correo 
                    electrónico que nos haya proporcionado, o c) en nuestra página web.`
        } else if (number == 10) {
            ParrafoPrivacidadSwitch.innerHTML = `<strong>INCONFORMIDADES:</strong> <br>
                    Si usted considera que su derecho de protección de datos personales ha sido lesionado por alguna conducta de 
                    nuestros empleados o de nuestras actuaciones o respuestas, presume que en el tratamiento de sus datos personales 
                    existe alguna violación a las disposiciones previstas en la Ley Federal de Protección de Datos Personales en 
                    Posesion de los ParticulaRes, podrá interponer la queja o denuncia correspondiente ante el INAI, para mayor 
                    información visite www.inai.org.mx`
        }
    });
});