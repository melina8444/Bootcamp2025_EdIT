
        // Obtengo elementos del DOM
        const form = document.getElementById('myForm');
        const nombreInput = document.getElementById('nombre');
        const edadInput = document.getElementById('edad');
        const emailInput = document.getElementById('email');
        const nombreError = document.getElementById('nombreError');
        const edadError = document.getElementById('edadError');
        const emailError = document.getElementById('emailError');
        const submitBtn = document.getElementById('submitBtn');
        
        // Expresiones regulares para validar
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,20}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Objeto para rastrear el estado de validación de cada campo
        const EstadoValidacion = {
            nombre: false,
            edad: false,
            email: false
        };
        
        // Función para validar nombre
        function validarNombre() {
            const valor = nombreInput.value.trim();
            if (nombreRegex.test(valor)) {
                nombreError.style.display = 'none';
                nombreInput.classList.remove('error-input');
                nombreInput.classList.add('success');
                EstadoValidacion.nombre = true;
            } else {
                nombreError.style.display = 'block';
                nombreInput.classList.add('error-input');
                nombreInput.classList.remove('success');
                EstadoValidacion.nombre = false;
            }
            actualizarBoton();
        }
        
        // Función para validar edad
        function validarEdad() {
            const valor = parseInt(edadInput.value);
            if (!isNaN(valor) && valor >= 18 && valor <= 120) {
                edadError.style.display = 'none';
                edadInput.classList.remove('error-input');
                edadInput.classList.add('success');
                EstadoValidacion.edad = true;
            } else {
                edadError.style.display = 'block';
                edadInput.classList.add('error-input');
                edadInput.classList.remove('success');
                EstadoValidacion.edad = false;
            }
            actualizarBoton();
        }
        
        // Función para validar email
        function validarEmail() {
            const valor = emailInput.value.trim();
            if (emailRegex.test(valor)) {
                emailError.style.display = 'none';
                emailInput.classList.remove('error-input');
                emailInput.classList.add('success');
                EstadoValidacion.email = true;
            } else {
                emailError.style.display = 'block';
                emailInput.classList.add('error-input');
                emailInput.classList.remove('success');
                EstadoValidacion.email = false;
            }
            actualizarBoton();
        }
        
        // Función para habilitar o deshabilitar el botón
        function actualizarBoton() {
            if (EstadoValidacion.nombre && EstadoValidacion.edad && EstadoValidacion.email) {
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true;
            }
        }
        
        // Utilizo Event listeners para validar en tiempo real
        nombreInput.addEventListener('input', validarNombre);
        edadInput.addEventListener('input', validarEdad);
        emailInput.addEventListener('input', validarEmail);
        
        // Manejo el envío del formulario
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Creo el objeto con los datos
            const formData = {
                nombre: nombreInput.value.trim(),
                edad: parseInt(edadInput.value),
                email: emailInput.value.trim()
            };
            
            // Muestro en consola
            console.log(formData);
            
            //  reseteo el formulario después del envío
            form.reset();
            submitBtn.disabled = true;
            
            // Limpio clases de validación
            nombreInput.classList.remove('success', 'error-input');
            edadInput.classList.remove('success', 'error-input');
            emailInput.classList.remove('success', 'error-input');
        });