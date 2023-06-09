const models = require("../models");
const Absence = models.absence;

exports.create = async (req, res) => {
  if (req.body.reason) {
    await models.reason
      .create(req.body.reason)
      .then((data) => {
        req.body.ReasonId = data.dataValues.id;
      })
      .catch((error) => {
        return res.json({
          success: false,
          message:
            "Une erreur est survenue lors de la création de la raison !!",
          error,
        });
      });
  }
  Absence.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "Votre demande de permission a été envoyée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création de l'absence !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Absence.findAll({
    include: [models.reason, models.employee, models.admin],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Les absences ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des absences !!",
        error,
      });
    });
};

exports.findAllByEmployee = (req, res) => {
  Absence.findAll({
    where: {
      EmployeeId: req.params.EmployeeId,
    },
    include: [models.reason, models.employee, models.admin],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "L'absence a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de l'absence !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Absence.findByPk(req.params.id, {
    include: [models.reason, models.employee, models.admin],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "L'absence a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de l'absence !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Absence.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "L'absence a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de l'absence !!",
        error,
      });
    });
};
