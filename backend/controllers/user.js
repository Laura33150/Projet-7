const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const fs = require('fs');




exports.signup = (req, res, next) => {


    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,

            });
            user.save()
                .then(() => res.status(201).json({
                    message: 'Utilisateur crée !'
                }))
                .catch(error => res.status(500).json({
                    error
                }));
        })
        .catch(error => console.log(error) || res.status(500).json({
            error
        }));
};


exports.login = (req, res, next) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
      })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            error: 'Utilisateur non trouvé !'
          });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({
                error: 'Mot de passe incorrect !'
              });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign({
                  userId: user._id
                },
                `${process.env.RND_TKN}`, {
                  expiresIn: '24h'
                }
              )
            });
          })
          .catch(error => res.status(500).json({
            error
          }));
      })
      .catch(error => res.status(500).json({
        error
      }));
  };

  exports.deleteUser = async (req, res, next) => {
    try {
        await User.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
        return res.status(200).send({
            message: "Utilisateur supprimé"
        })
    } catch (err) {
        return res.status(500).json({
            err
        });
    }
}


exports.getOneUser = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.KEY_TOKEN);
    const userId = decodedToken.userId;
    User.findOne({
            where: {
                id: userId,
            },
        })
        .then((user) => res.status(200).json({
            user
        }))
        .catch((err) => res.status(401).json({
            err
        }));
};



exports.getAllUsers = (req, res, next) => {
    User.findAll()
        .then((users) => res.status(200).json({
            users
        }))
        .catch((err) => res.status(401).json({
            err
        }));
};