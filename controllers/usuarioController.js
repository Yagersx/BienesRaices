const login = (req, res)=>{
    res.render('auth/login', {
        pageTitle: 'Iniciar Sesión'
    });
}

const register = (req, res)=>{
    res.render('auth/registro', {
        pageTitle: 'Crear Cuenta'
    });
}


export {
    login,
    register
}