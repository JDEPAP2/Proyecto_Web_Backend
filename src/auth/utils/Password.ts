var passwordValidator = require('password-validator');
var schema = new passwordValidator();

schema
.is().min(8)                                    
.is().max(100)                                  
.has().uppercase()                              
.has().lowercase()                              
.has().digits(1)                                
.has().not().spaces()

export const validPassword = (pass: string) => schema.validate(pass, { details: true })