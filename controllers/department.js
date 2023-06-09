const models = require("../models");
const Department = models.department;

exports.create = (req, res) => {
  Department.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "Le département a été créé avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la création du département !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Department.findAll({ include: [models.standard, models.departmentPosition] })
    .then((data) => {
      res.json({
        success: true,
        message: "Les départements ont été récupérés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des départements !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Department.findByPk(req.params.id, {
    include: [models.standard, models.departmentPosition],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Le département a été récupéré avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération du département !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Department.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "Le département a été modifié avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification du département !!",
        error,
      });
    });
};
