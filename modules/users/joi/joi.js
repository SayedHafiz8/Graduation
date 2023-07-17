const Joi=require("joi");

const signupSchema={
    body:Joi.object().keys({
        firstName:Joi.string().required(),
        lastName:Joi.string().required(),
        email:Joi.string().required().email(),
        password:Joi.string().required(),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
            "any.only": "The two passwords do not match",
            "any.required": "Please re-enter the password",
          }),
          role:Joi.string().optional()
    })
}

const deleteUesrSchema={
    params:Joi.object().keys({
        id:Joi.string().required()
    })
}


const updateUserSchema={
    params:Joi.object().keys({
        id:Joi.string().required()
    }),
    // body:Joi.object().keys({
    //     name:Joi.string().required(),
    //     email:Joi.string().required().email(),
    //     password:Joi.string().required()
    // })
}
const loginSchema={
    body:Joi.object().keys({
        email:Joi.string().required().email(),
        password:Joi.string().required()
    })
}


module.exports={
    signupSchema,
    deleteUesrSchema,
    updateUserSchema,
    loginSchema
}