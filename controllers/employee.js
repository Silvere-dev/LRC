const models = require("../models");
const Employee = models.employee;
const uploadFile = require("../middlewares/uploadFile");
const base64toFile = require("../middlewares/base64toFile");

exports.create = async (req, res) => {
  const employee = {
    lastname: req.body?.lastname,
    firstname: req.body?.firstname,
    gender: req.body?.gender,
    address: req.body?.address,
    phone: req.body?.phone,
    mail: req.body?.mail,
    position: req.body?.position,
    photo: req.body?.photo,
    CityId: req.body?.CityId,
    CountryId: req.body?.CountryId,
    DepartmentId: req.body?.DepartmentId,
  };

  employee.lastname = employee.lastname.toUpperCase();
  employee.firstname = employee.firstname[0]
    .toUpperCase()
    .concat(
      employee.firstname.toLowerCase().substring(1, employee.firstname.length)
    );

  if (req.body.photo) {
    __timevalue = Date.now();
    const imageType = req.body.photo.split(".")[0];
    const image = "data:image/".concat(
      imageType,
      ";base64,",
      req.body.photo.split(".")[1]
    );
    const imageName = `lrc-employee-${__timevalue}.${imageType}`;

    await base64toFile(image, imageName)
      .then((data) => {
        uploadFile(data, imageName);
        req.body.photo = data.path;
      })
      .catch((error) => {
        console.log(error);

        res.json({
          success: false,
          message:
            "Une erreur est survenue lors de l'enrégistrement de l'image !!",
          data: req.body,
        });
      });
  }

  Employee.create(employee)
    .then(async (data) => {
      data = await Employee.findOne({
        where: { phone: employee.phone },
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
      });
      res.json({
        success: true,
        message: "L'employé a été créé avec succès.",
        data,
      });
    })
    .catch((error) => {
      console.log("erreur : " + error);
      res.json({
        success: false,
        message: "Une erreur est survenue lors de la création de l'employé !!",
        error,
      });
    });
};

exports.findAll = (req, res) => {
  Employee.findAll({
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
  })
    .then((employees) => {
      employees.forEach((employee) => {
        employee.dataValues.photo =
          "http://192.168.100.17:4400/lrcsheet/api/uploads/".concat(
            employee.dataValues.photo
          );
      });

      res.json({
        success: true,
        message: "Les employés ont été récupérés avec succès.",
        data: employees,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération des employés !!",
        error,
      });
    });
};

exports.findById = (req, res) => {
  Employee.findByPk(req.params.id, {
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
  })
    .then((employee) => {
      employee.dataValues.photo =
        "http://192.168.100.17:4400/lrcsheet/api/uploads/".concat(
          employee.dataValues.photo
        );

      res.json({
        success: true,
        message: "L'employé a été récupérée avec succès.",
        data: employee,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la récupération de l'employé !!",
        error,
      });
    });
};

exports.update = async (req, res) => {
  if (req.body.photo) {
    __timevalue = Date.now();
    const imageType = req.body.photo.split(".")[0];
    const image = "data:image/".concat(
      imageType,
      ";base64,",
      req.body.photo.split(".")[1]
    );
    const imageName = `lrc-employee-${__timevalue}.${imageType}`;

    await base64toFile(image, imageName)
      .then((data) => {
        uploadFile(data, imageName);
        req.body.photo = data.path;
      })
      .catch((error) => {
        console.log(error);

        res.json({
          success: false,
          message:
            "Une erreur est survenue lors de l'enrégistrement de l'image !!",
          data: req.body,
        });
      });
  }

  Employee.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({
        success: true,
        message: "L'employé a été modifié avec succès.",
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
        message:
          "Une erreur est survenue lors de la modification de l'employé !!",
        error,
      });
    });
};
