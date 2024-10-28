/* GET login page */
const login = function (req, res) {
  res.render("login", {
    title: "Login - Quotist",
    pageHeader: {
      title: "Login",
    },
  });
};

/* GET register page */
const register = function (req, res) {
  res.render("register", {
    title: "Register - Quotist",
    pageHeader: {
      title: "Register",
    },
  });
};

module.exports = {
  login,
  register,
};
