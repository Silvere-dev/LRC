const models = require("../models");
const Reason = models.reason;

exports.create = (req, res) => {
  Reason.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "La raison a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création de la raison !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Reason.findAll({ include: [models.absence, models.attendance, models.admin] })
    .then((data) => {
      res.json({
        success: true,
        message: "Les raisons ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des raisons !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Reason.findByPk(req.params.id, {
    include: [models.absence, models.attendance, models.admin],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "La raison a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de la raison !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Reason.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "La raison a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de la raison !!",
        error,
      });
    });
};
