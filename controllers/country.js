const models = require("../models");
const Country = models.country;

exports.create = (req, res) => {
  const country = {
    name: req.body?.name,
  };

  Country.create(country)
    .then((data) => {
      res.json({
        success: true,
        message: "Le pays a été créé avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création du pays !!",
        error: error.message,
      });
    });
};

exports.findAll = (req, res) => {
  Country.findAll({
    include: [
      {
        model: models.city,
        include: {
          model: models.department,
          include: models.departmentPosition,
        },
      },
    ],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Les pays ont été récupérés avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la récupération des pays !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Country.findByPk(req.params.id, {
    include: [
      {
        model: models.city,
        include: {
          model: models.department,
          include: models.departmentPosition,
        },
      },
    ],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Le pays a été récupéré avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la récupération du pays !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  Country.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "Le pays a été modifié avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la modification du pays !!",
        error,
      });
    });
};
