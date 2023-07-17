const Joi=require("joi");


const addBlogSchema={
    body:Joi.object().required().keys({
        createdBy:Joi.string().optional(),
        blogImgURL:Joi.string().required()
    }
    )
}

const deleteSchema={
    params:Joi.object().required().keys({
        id:Joi.string().required()
    })
}

module.exports={
    addBlogSchema,
    deleteSchema
}