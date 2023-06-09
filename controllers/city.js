const models = require("../models");
const City = models.city;

exports.create = (req, res) => {
  City.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "La ville a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création de la ville !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  City.findAll({ include: [models.country] })
    .then((data) => {
      res.json({
        success: true,
        message: "Les villes ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des villes !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  City.findByPk(req.params.id, {
    include: [models.country],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "La ville a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de la ville !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  City.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "La ville a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de la ville !!",
        error,
      });
    });
};
