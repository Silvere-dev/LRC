const models = require("../models");
const Attendance = models.attendance;

exports.create = (req, res) => {
  Attendance.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "La présence a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la création de la présence !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Attendance.findAll({
    order: [["id", "DESC"]],
    include: [
      models.reason,
      {
        model: models.employee,
        include: [
          {
            model: models.city,
            include: models.country,
          },
          models.country,
          {
            model: models.department,
            include: [models.standard, models.departmentPosition],
          },
        ],
      },
      models.task,
    ],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Les présences ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des présences !!",
        error,
      });
    });
};

exports.findAllByEmployee = (req, res) => {
  Attendance.findAll({
    order: [["id", "DESC"]],
    include: [
      models.reason,
      {
        model: models.employee,
        include: [
          {
            model: models.city,
            include: models.country,
          },
          models.country,
          {
            model: models.department,
            include: [models.standard, models.departmentPosition],
          },
        ],
      },
      models.task,
    ],
    where: {
      EmployeeId: req.params.id,
    },
  })
    .then((data) => {
      res.json({
        success: true,
        message: "Les présences ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des présences !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Attendance.findByPk(req.params.id, {
    order: [["id", "DESC"]],
    include: [
      models.reason,
      {
        model: models.employee,
        include: [
          {
            model: models.city,
            include: models.country,
          },
          models.country,
          {
            model: models.department,
            include: [models.standard, models.departmentPosition],
          },
        ],
      },
      models.task,
    ],
  })
    .then((data) => {
      res.json({
        success: true,
        message: "La présence a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de la présence !!",
        error,
      });
    });
};

exports.update = async (req, res) => {
  const attendance = {
    date: req.body?.date,
    startTime: req.body?.startTime,
    endTime: req.body?.endTime,
    breakStartTime: req.body?.breakStartTime,
    breakEndTime: req.body?.breakEndTime,
    ReasonId: null,
  };
  if (req.body.Reason) {
    await models.reason
      .create(req.body.Reason)
      .then((data) => {
        attendance.ReasonId = data.dataValues.id;
      })
      .catch((error) => {
        res.json({
          success: false,
          message:
            "Une erreur est survenue lors de la création de la raison !!",
          error,
        });
      });
  }
  Attendance.update(attendance, {
    where: { id: req.params.id },
  })
    .then((data) => {
      res.json({
        success: true,
        message: "La présence a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de la présence !!",
        error,
      });
    });
};
