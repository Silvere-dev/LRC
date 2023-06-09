const models = require("../models");
const DepartmentPosition = models.departmentPosition;

exports.create = (req, res) => {
  DepartmentPosition.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "La position du département a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la création de la position du département !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  DepartmentPosition.findAll({ include: models.department })
    .then((data) => {
      res.json({
        success: true,
        message:
          "Les positions des départements ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des positions des départements !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  DepartmentPosition.findByPk(req.params.id, { include: models.department })
    .then((data) => {
      res.json({
        success: true,
        message: "La position du département a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de la position du département !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  DepartmentPosition.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "La position du département a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de la position du département !!",
        error,
      });
    });
};
