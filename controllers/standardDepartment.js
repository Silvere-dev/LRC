const models = require("../models");
const StandardDepartment = models.standardDepartment;

exports.create = (req, res) => {
  StandardDepartment.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "La norme du département a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la création de la norme du département !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  StandardDepartment.findAll()
    .then((data) => {
      res.json({
        success: true,
        message: "Les normes des départements ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des normes des départements !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  StandardDepartment.findByPk(req.params.id)
    .then((data) => {
      res.json({
        success: true,
        message: "La norme du département a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de la norme du département !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  StandardDepartment.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "La norme du départment a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de la norme du département !!",
        error,
      });
    });
};
