const {DELETE_USER,UPDATE_USER,GET_ALL_USER,}=require("../../modules/users/endPoints")
const {DELETE_BLOG,ADD_BLOG} = require("../../modules/blogs/endPoints")


module.exports=[
    DELETE_USER,
    UPDATE_USER,
    GET_ALL_USER,
    DELETE_BLOG,
    ADD_BLOG
]