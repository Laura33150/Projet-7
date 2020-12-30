const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const fs = require('fs');




exports.signup = (req, res, next) => {

  const User = groupania.User;

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
    groupania.User.findOne({
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