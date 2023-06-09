const models = require("../models");
const Action = models.action;

exports.create = (req, res) => {
  Action.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "L'action a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création de l'action !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Action.findAll()
    .then((data) => {
      res.json({
        success: true,
        message: "Les actions ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des actions !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Action.findByPk(req.params.id)
    .then((data) => {
      res.json({
        success: true,
        message: "L'action a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de l'action !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Action.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "L'action a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de l'action !!",
        error,
      });
    });
};
