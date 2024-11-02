export const createBlog = (request, response) => {
    console.log("Blog created successfully");
    response.status(200).send("Blog created successfully");
};

export const readBlog = (request, response) => {
    console.log("Blog read successfully");
    response.status(200).send("Blog read successfully");
};

export const updateBlog = (request, response) => {
    console.log("Blog update successfully");
    response.status(200).send("Blog update successfully");
};

export const deleteBlog = (request, response) => {
    console.log("Blog delete successfully");
    response.status(200).send("Blog delete successfully");
};