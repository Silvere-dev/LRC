const models = require("../models");
const Task = models.task;

exports.create = (req, res) => {
  Task.create(req.body)
    .then((data) => {
      res.json({
        success: true,
        message: "La tâche a été créée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création de la tâche !!",
        error,
      });
    });
};

exports.findAllByEmployee = async (req, res) => {
  const data = [];
  try {
    await models.attendance
      .findAll({
        order: [["id", "DESC"]],
        where: { EmployeeId: req.params.id },
        include: Task,
      })
      .then((attendances) => {
        attendances.forEach((attendance) => {
          if (attendance.dataValues.Tasks.length > 0) {
            attendance.dataValues.Tasks.forEach((task) => {
              data.push(task);
            });
          }
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

    data.reverse();

    res.json({
      success: true,
      message: "Les tâches de l'employé ont été récupérées avec succès.",
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message:
        "Une erreur est survenue lors de la récupération des tâches de l'employé !!",
      error,
    });
  }
};

exports.findAll = (req, res) => {
  Task.findAll()
    .then((data) => {
      res.json({
        success: true,
        message: "Les tâches ont été récupérées avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des tâches !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Task.findByPk(req.params.id)
    .then((data) => {
      res.json({
        success: true,
        message: "La tâche a été récupérée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de la tâche !!",
        error,
      });
    });
};

exports.update = (req, res) => {
  if (req.params.id) {
    var taskStatus = "terminée";
  }
  Task.update({ status: taskStatus }, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "La tâche a été modifiée avec succès.",
        data,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de la tâche !!",
        error,
      });
    });
};
