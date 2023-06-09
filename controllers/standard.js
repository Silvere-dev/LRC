const models = require("../models");
const Standard = models.standard;

exports.create = (req, res) => {
  Standard.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "La norme a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création de la norme !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Standard.findAll({
    include: [models.city, models.country],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Les normes ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des normes !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Standard.findByPk(req.params.id, {
    include: [models.city, models.country],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "La norme a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de la norme !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Standard.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "La norme a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de la norme !!",
        error,
      });
    });
};
