const models = require("../models");
const Role = models.role;

exports.create = (req, res) => {
  Role.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "Le rôle a été créé avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création du rôle !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Role.findAll()
    .then((data) => {
      res.json({
        success: true,
        message: "Les rôles ont été récupérés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la récupération des rôles !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Role.findByPk(req.params.id)
    .then((data) => {
      res.json({
        success: true,
        message: "Le rôle a été récupéré avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la récupération du rôle !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Role.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "Le rôle a été modifié avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la modification du rôle !!",
        error,
      });
    });
};
