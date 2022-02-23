
//Code For Curd controllers
//Create Post Request
function post(model) {
    return async (req, res) => {
        try {
            const item = await model.create(req.body);
            return res.status(201).send(item);
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    };
}

//Create Patch Request
function updateOne(model) {
    return async (req, res) => {
        try {
            const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(201).send(item);
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    };
}


//Create Get one request
function getOne(model) {
    return async (req, res) => {
        try {
            const item = await model.findById(req.params.id).lean().exec();
            if (item) {
                return res.status(200).send(item);
            }
            else {
                return res.status(404).send({ message: "User not found!" });
            }
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    };
}



//Create get all request
function getAll(model) {
    return async (req, res) => {
        try {
            const items = await model.find().lean().exec();
            return res.status(200).send(items);
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    };
}


//Create Delete resquest
function deleteOne(model) {
    return async (req, res) => {
        try {
            const item = await model.findByIdAndDelete(req.params.id);
            return res.send(item);
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    };
}


//Import CURD
module.exports = (model) =>{
    return {
        post: post(model),
        getAll : getAll(model),
        getOne: getOne(model),
        updateOne: updateOne(model),
        deleteOne: deleteOne(model),
    }
};





