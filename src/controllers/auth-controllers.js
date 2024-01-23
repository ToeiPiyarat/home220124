exports.register = (req, res, next) => {
    const { email, password } = req.body;
  
    //   logic
  
    res.json({ email, password });
  };
  
  exports.login = (req, res, next) => {
    res.json({ message: "Login" });
  };
  
  exports.forgetPassword = (req, res, next) => {
      const {email} = req.body;
      // gen token -> สร้าง link -> ส่ง email
    res.json({ email });
  };

//http://api.codecamp.com/auth/
exports.verifyForgetPassword = (req, res, next) => {
    const { token } = req.params;
    res.json({ token });
};

exports.resetPassword = (req, res, next) => {
    const { token } =req.params;
    const { password } = req.body;
    res.json({ token, password});
};
