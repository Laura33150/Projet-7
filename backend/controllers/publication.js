const jwt = require('jsonwebtoken');
const Publication = require('../models/publication');
const User = require('../models/user')

exports.getAllPublications = (req, res, next) => {

    models.Publication.findAll()
        .then(publications => res.status(200).json(publications))
        .catch(error => res.status(400).json({
            error: error
        }));
};

exports.getOnePublication = (req, res, next) => {

    models.Publication.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: models.User,
                attributes: ['username']
            }
        })
        .then(publication => {
            res.status(200).json(publication);
        })
        .catch(error => res.status(400).json({
            error
        }));
};

exports.modifyPublication = async (req, res) => {

    try {


        await models.Publication.findOne({
            where: {
                id: (req.params.id)
            }
        });

        await models.Publication.update({
            title: req.body.title,
            content: req.body.content,
            attachment: req.body.attachment
        }, {
            where: {
                id: (req.params.id)
            }
        });

        return res.status(200).send({
            message: "Publication modifiée"
        })
    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.deletePublication = async (req, res, next) => {
    try {
        await models.Publication.destroy({
            where: {
                id: (req.params.id)
            }
        });
        return res.status(200).send({
            message: "Publication supprimée"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            err
        });
    }
}

exports.createPublication = (req, res, next) => {
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    const userId = decodedToken.userId;

    models.User.findOne({
        'id' : userId
    })
    .then( user => {
        if(null==user) {
            return res.status(400).json({
                'error' : 'Utilisateur non trouvé.',
                'userId' : 'userId'
            })
        }
    })

    let data = {
        'UserId': userId,
        'title': req.body.title,
        'content': req.body.content,
        'likes': req.body.likes,
        'attachment': `${req.body.inputFile}`
    };

    models.Publication.create(data)
    .then((NouvellePublication) => {
      return res.status(200).json({
        'user': user,
        'NouvellePublication': NouvellePublication
      })
    })
   .catch((error) => {
       return res.status(400).json({
        'error': error,
        'user': user,
        'data': data
       })
   })
   .catch((error) => {
       return res.status(500).json({
        'error': error,
        'userId': userId
       })
   });
}