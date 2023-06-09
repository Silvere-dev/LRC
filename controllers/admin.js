const models = require("../models");
const Admin = models.admin;

exports.create = (req, res) => {
  Admin.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "L'administrateur a été créé avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la création de l'administrateur !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Admin.findAll({
    include: [models.employee, models.role, models.reason, models.absence],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Les administrateurs ont été récupérés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des administrateurs !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Admin.findByPk(req.params.id, {
    include: [models.employee, models.role, models.reason, models.absence],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "L'administrateur a été récupéré avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de l'administrateur !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Admin.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "L'administrateur a été modifié avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de l'administrateur !!",
        error,
      });
    });
};
