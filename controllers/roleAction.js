const models = require("../models");
const RoleAction = models.roleAction;

exports.create = (req, res) => {
  RoleAction.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "Le rôle et l'action ont été créés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la création du rôle et de l'action !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  RoleAction.findAll({ include: [models.role, models.action] })
    .then((data) => {
      res.json({
        success: true,
        message: "Les rôles et les actions ont été récupérés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des rôles et des actions !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Role.findByPk(req.params.id, { include: [models.role, models.action] })
    .then((data) => {
      res.json({
        success: true,
        message: "Le rôle et l'action ont été récupérés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération du rôle et de l'action !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Role.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "Le rôle et l'action ont été modifiés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification du rôle et de l'action !!",
        error,
      });
    });
};
