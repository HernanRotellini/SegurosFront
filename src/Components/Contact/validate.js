export const validate = (inputs) => {
    const errors = {};
    const nameRegexp = /^[a-zA-Z\s]+$/;
    const emailRegexp = /^[a-zA-Z\s]+$/;
    const subjectRegexp = /^[a-zA-Z0-9\s.,!?'-]$/
    if(!nameRegexp.test(inputs.name.trim())){
        errors.name = 'El nombre no puede contener números ni símbolos';
    }
    if(!emailRegexp.test(inputs.email.trim())){
        errors.email = 'Ingrese un email válido';
    }
    if(!subjectRegexp.text(inputs.subject)){
        errors.subject = 'Error en el asunto';
    }
}